function sortByStrings(s,t){
    return s.split("").sort(function(a, b) {
    return t.indexOf(a) - t.indexOf(b);
  });
  }
