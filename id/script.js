    fetch("https://script.googleusercontent.com/macros/echo?user_content_key=ngib6Xh_X_WpIjemPBbr454nQF7vnG6Qg2ndpHe6WAGTsnV5s_LWXPrkScnE3K7zR2cCN-eHVoVSTOjyrHtYVRJDFOpw6XJym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBPFutc-1dfj4jn5RqWXa6tLwBij8QrdNtGIK9xmOnyVbt6JmlIX4gZyhjxeH2Ev448FPgLhL7MYcMrTO9OePpSiaFo0O0F2vw&lib=MkcCSAuoyuUetty-_BxSzaJGEqE2zyH0W")
    .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        for (const product of data.user) {
          const listItem = document.getElementById("myData");
          
          const nameElement = document.createElement("tr");
          nameElement.innerHTML = `
          <tr>
            <td style="text-align: center;">${product.type}:${product.meta}</td>
            <td style="text-align: center;"><img src="items/${product.type}-${product.meta}.png" alt="${product.name}" width="30" height="30"></td>
            <td style="text-align: center;"><span class="name">${product.name}</span><br><span class="text-id">(minecraft:${product.text_type})</span></td>
          </tr>`;

          listItem.append(
            nameElement,
          );
          
          listItem.appendChild(nameElement);
        }
      })
      .catch((error) => {
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(`Error: ${error.message}`));
        document.body.insertBefore(p, myList);
      });