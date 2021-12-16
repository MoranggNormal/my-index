const wikiClean = (string: string) => {
  return string.replace(/<span class=\"searchmatch\">|<\/span>|&quot;/g, "");
};

export default wikiClean;
