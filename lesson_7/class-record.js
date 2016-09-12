var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  var scoreData = Object.keys(scores).map(function(student) {
    return scores[student].scores;
  });

  // transform the above score objects to be an array of arrays for exam scores
  var examData = scoreData.map(function(score) {
    return score.exams;
  });

  return {
    studentGrades: scoreData.map(function(scoreObj) {
      return getStudentScore(scoreObj);
    }),
    exams: getExamSummary(examData)
  }
};

function getStudentScore(scoreObj) {
  var avgExamScore = getAvgScore(scoreObj.exams);
  var totalExerciseScore = getTotalScore(scoreObj.exercises);
  var finalScore = Math.round(avgExamScore * .65 + totalExerciseScore * .35);
  var grade = getGrade(finalScore);
  return String(finalScore) + ' (' + grade + ')';
}

function getExamSummary(examData) {
  var examSummaries = [];  
  var examScores;

  for (var i = 0, len = examData[0].length; i < len; i++) {
    examScores = examData.map(function(studentScores) {
      return studentScores[i];
    });

    examSummaries.push({
      average: getAvgScore(examScores),
      minimum: getMinScore(examScores),
      maximum: getMaxScore(examScores),
    });
  }

  return examSummaries;
}

function getAvgScore(scores) {
  var total = scores.reduce(function(sum, score) {
    return sum + score;
  });
  return Number((total / scores.length).toFixed(1));
}

function getTotalScore(scores) {
  return scores.reduce(function(sum, score) {
    return sum + score;
  });
}

function getGrade(score) {
  if (score >= 93) {
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 77) {
    return 'C';
  } else if (score >= 69) {
    return 'D';
  } else if (score >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function getMinScore(scores) {
  return scores.reduce(function(score1, score2) {
    if (score1 < score2) {
      return score1;
    } else {
      return score2;
    }
  });
}

function getMaxScore(scores) {
  return scores.reduce(function(score1, score2) {
    if (score1 > score2) {
      return score1;
    } else {
      return score2;
    }
  });
}

generateClassRecordSummary(studentScores);
