package com.devsuperior.dsmovie.service;

import com.devsuperior.dsmovie.dto.LivroDTO;
import com.devsuperior.dsmovie.entities.Livros;
import com.devsuperior.dsmovie.repository.LivroRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class LivroService {

    @Autowired
    private LivroRepository repository;

    @Transactional(readOnly = true)
    public Page<LivroDTO> findAll(Pageable pageable) {

        Page<Livros> result = repository.findAll(pageable);
        Page<LivroDTO> page = result.map( x -> new LivroDTO(x));
        return page;

    }

}
