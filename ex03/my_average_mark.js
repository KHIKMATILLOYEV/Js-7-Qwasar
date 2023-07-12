function my_average_mark(param_1) {
    if (param_1.length === 0) {

      return 0.0;

    }

    let sum = 0;
    let count = 0;

    for (let i = 0; i < param_1.length; i++) {

      const mark = param_1[i]['integer'];
      sum += mark;
      count++;

    }

    let average = sum / count;
    return average.toFixed(1);

  }