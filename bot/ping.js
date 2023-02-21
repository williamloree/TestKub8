import axios from "axios";
let nb = 0;

while (nb < 2) {
  nb++;
  try {
    const result = await axios.get(`https://apiminifier.jccano.fr/mini`);
    console.log(`${nb} : ${result.data}`);
  } catch (error) {
    console.log("🚀 ~ file: urlRequest.js:9 ~ getAllUrls ~ error", error);
  }
  nb++;
}
