package com.velasco.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.velasco.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
