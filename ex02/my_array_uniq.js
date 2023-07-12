function my_array_uniq(param_1) {
    const natija = [];
    for (let i = 0; i < param_1.length; i++) {
      if (natija.indexOf(param_1[i]) === -1) {
        natija.push(param_1[i]);
      }
    }
    return natija;
  }