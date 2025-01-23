    function convertToWords() {
      let num = document.getElementById("numberInput").value;

      if (num < 0 || num > 9999) {
        alert("Please enter a valid 4-digit number.");
        return;
      }

      let n1, n2, n3, n4, oper, words = "";

      function ones() {
        switch (oper) {
          case 1: words += "One"; break;
          case 2: words += "Two"; break;
          case 3: words += "Three"; break;
          case 4: words += "Four"; break;
          case 5: words += "Five"; break;
          case 6: words += "Six"; break;
          case 7: words += "Seven"; break;
          case 8: words += "Eight"; break;
          case 9: words += "Nine"; break;
          default: break;
        }
      }

      function special() {
        switch (n4) {
          case 1: words += "Eleven"; break;
          case 2: words += "Twelve"; break;
          case 3: words += "Thirteen"; break;
          case 4: words += "Fourteen"; break;
          case 5: words += "Fifteen"; break;
          case 6: words += "Sixteen"; break;
          case 7: words += "Seventeen"; break;
          case 8: words += "Eighteen"; break;
          case 9: words += "Nineteen"; break;
          default: break;
        }
      }

      function convertNumberToWords() {
        words = ""; // Reset the words
        oper = n1;
        if (oper !== 0) {
          ones();
          words += " Thousand ";
        }
        oper = n2;
        if (oper !== 0) {
          ones();
          words += " Hundred ";
        }
        oper = n3;
        if (oper === 1) {
          special();
        } else if (oper === 2) {
          words += "Twenty ";
        } else if (oper === 3) {
          words += "Thirty ";
        } else if (oper === 5) {
          words += "Fifthy ";
        } else if (oper !== 0) {
          ones();
          words += "ty ";
        }
        oper = n4;
        if (n3 === 1) {
          words += " ";
        }else if(oper != 0){
          ones();
        }
      }

      n4 = num % 10;
      num = Math.floor(num / 10);
      n3 = num % 10;
      num = Math.floor(num / 10);
      n2 = num % 10;
      num = Math.floor(num / 10);
      n1 = num % 10;

      convertNumberToWords();

      document.getElementById("result").value = words.trim();
    }
