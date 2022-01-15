package com.devsuperior.dsmovie.controller;

import com.devsuperior.dsmovie.dto.LivroDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.service.ScoreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/score")
public class ScoreControler {

    @Autowired
    private ScoreService service;

    @PutMapping
    public LivroDTO saveScore(@RequestBody ScoreDTO dto) {
        LivroDTO livroDTO = service.saveScore(dto);
        return livroDTO;

    }
}
