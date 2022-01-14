package com.devsuperior.dsmovie.repository;

import com.devsuperior.dsmovie.entities.Livros;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepository extends JpaRepository<Livros, Long> {
    
}