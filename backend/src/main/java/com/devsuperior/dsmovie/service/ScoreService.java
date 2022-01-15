package com.devsuperior.dsmovie.service;

import com.devsuperior.dsmovie.dto.LivroDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Livros;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repository.LivroRepository;
import com.devsuperior.dsmovie.repository.ScoreRepository;
import com.devsuperior.dsmovie.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreService {

    @Autowired
    private LivroRepository livroRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Transactional
    public LivroDTO saveScore(ScoreDTO dto) {
        
        User user = userRepository.findByEmail(dto.getEmail());
        if (user == null) {
            user = new User();
            user.setEmail(dto.getEmail());
            user = userRepository.saveAndFlush(user);
        }

        Livros livros = livroRepository.findById(dto.getLivroId()).get();

        Score score = new Score();
        score.setLivro(livros);
        score.setUser(user);
        score.setValue(dto.getScore());

        score = scoreRepository.saveAndFlush(score);

        double sum = 0.0;
        for (Score s : livros.getScores()){
            sum += sum + s.getValue();
        }
        double avg = sum / livros.getScores().size();

        livros.setScore(avg);
        livros.setCount(livros.getScores().size());

        livros = livroRepository.save(livros);

        return new LivroDTO(livros);
    }

}
