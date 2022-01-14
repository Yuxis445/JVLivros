package com.devsuperior.dsmovie.dto;

import com.devsuperior.dsmovie.entities.Livros;

public class LivroDTO {
    
    private Long id;
    private String title;
    private Double score;
    private Integer count;
    private String image;

    public LivroDTO(){}

    public LivroDTO(Long id, String title, Double score, Integer count, String image) {
        this.id = id;
        this.title = title;
        this.score = score;
        this.count = count;
        this.image = image;
    }

    public LivroDTO(Livros livros) {
        id = livros.getId();
        title = livros.getTitle();
        score = livros.getScore();
        count = livros.getCount();
        image = livros.getImage();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
    
    

}
