package com.velasco.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.velasco.dsmovie.entities.Score;
import com.velasco.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{
	
}
