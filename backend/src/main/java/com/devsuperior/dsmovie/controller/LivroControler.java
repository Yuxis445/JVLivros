package com.devsuperior.dsmovie.controller;

import com.devsuperior.dsmovie.dto.LivroDTO;
import com.devsuperior.dsmovie.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/livros")
public class LivroControler {

    @Autowired
    private LivroService service;
    
    @GetMapping
    public Page<LivroDTO> findAll(Pageable pageable) {
        return service.findAll(pageable);
    }

    @GetMapping(value = "/{id}")
    public LivroDTO findById(@PathVariable Long id) {
        return service.findById(id);
    }


}
