function convertHTML(str) {
    //Chaining of replace method with different arguments
      str = str.replace(/[&]+/g,'&amp;').replace(/[<]+/g,'&lt;').replace(/[>]+/g,'&gt;').replace(/["]+/g,'&quot;').replace(/[']+/g,"&apos;");
    return str;
    }
    
    // test here
    convertHTML("Dolce & Gabbana");