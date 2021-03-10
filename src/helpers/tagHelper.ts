export default {
  simplify(text) {
    const separators = /[\s,.;:()\-'+]/g;
    const diacritics = /[\u0300-\u036f]/g;
    const connectors = /\s(e|d(a|e|i|o|u)s?)\s/g;
    const articles = /\s(a|o(u|s))\s|\s(u(m|n)[s|(as)]?)\s/g;
    const pronomonalForms = /\sn(o|a)s?\s|\sl(a|o)s?\s/g;
    const others = /\s(com|por|para|em)\s|(\s|-)se\s/g;


    //capitalização e normalização
    text = text.toLowerCase()
      .normalize("NFD")
      .replace(diacritics, "")
      .replace(connectors, " ")
      .replace(articles, " ")
      .replace(pronomonalForms, " ")
      .replace(others, " ");

    //separando e removendo repetidos
    const arr = text.split(separators).filter((item, pos, self) => self.indexOf(item) == pos);
    console.log(arr);

    //removendo nulls, undefineds e strings vazias
    return arr.filter(item => (item));
  }
}