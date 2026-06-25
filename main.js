const kana = [
  {kana: 'ア', romanji: 'a'},
  {kana: 'カ', romanji: 'ka'},
  {kana: 'ガ', romanji: 'ga'},
  {kana: 'サ', romanji: 'sa'},
  {kana: 'ザ', romanji: 'za'},
  {kana: 'タ', romanji: 'ta'},
  {kana: 'ダ', romanji: 'da'},
  {kana: 'ナ', romanji: 'na'},
  {kana: 'ハ', romanji: 'ha'},
  {kana: 'バ', romanji: 'ba'},
  {kana: 'パ', romanji: 'pa'},
  {kana: 'マ', romanji: 'ma'},
  {kana: 'ヤ', romanji: 'ya'},
  {kana: 'ラ', romanji: 'ra'},
  {kana: 'ワ', romanji: 'wa'},
  {kana: 'キャ', romanji: 'kya'},
  {kana: 'ギャ', romanji: 'gya'},
  {kana: 'シャ', romanji: 'sha'},
  {kana: 'ジャ', romanji: 'jya'},
  {kana: 'チャ', romanji: 'cha'},
  {kana: 'ヂャ', romanji: 'dya'},
  {kana: 'ニャ', romanji: 'nya'},
  {kana: 'ヒャ', romanji: 'hya'},
  {kana: 'ビャ', romanji: 'bya'},
  {kana: 'ピャ', romanji: 'pya'},
  {kana: 'ミャ', romanji: 'mya'},
  {kana: 'リャ', romanji: 'rya'},
  {kana: 'イ', romanji: 'i'},
  {kana: 'キ', romanji: 'ki'},
  {kana: 'ギ', romanji: 'gi'},
  {kana: 'シ', romanji: 'shi'},
  {kana: 'ジ', romanji: 'ji'},
  {kana: '千', romanji: 'chi'},
  {kana: 'ヂ', romanji: 'di'},
  {kana: 'ニ', romanji: 'ni'},
  {kana: 'ヒ', romanji: 'hi'},
  {kana: 'ビ', romanji: 'bi'},
  {kana: 'ピ', romanji: 'pi'},
  {kana: 'ミ', romanji: 'mi'},
  {kana: 'リ', romanji: 'ri'},
  {kana: 'ウ', romanji: 'u'},
  {kana: 'ク', romanji: 'ku'},
  {kana: 'グ', romanji: 'tu'},
  {kana: 'ス', romanji: 'su'},
  {kana: 'ズ', romanji: 'zu'},
  {kana: 'ツ', romanji: 'tsu'},
  {kana: 'ヅ', romanji: 'du'},
  {kana: 'ヌ', romanji: 'nu'},
  {kana: 'フ', romanji: 'fu'},
  {kana: 'ブ', romanji: 'bu'},
  {kana: 'プ', romanji: 'pu'},
  {kana: 'ム', romanji: 'mu'},
  {kana: 'ユ', romanji: 'yu'},
  {kana: 'ル', romanji: 'ru'},
  {kana: 'キュ', romanji: 'kyu'},
  {kana: 'ギュ', romanji: 'gyu'},
  {kana: 'シュ', romanji: 'shu'},
  {kana: 'ジュ', romanji: 'jyu'},
  {kana: 'チュ', romanji: 'chu'},
  {kana: 'ヂュ', romanji: 'dyu'},
  {kana: 'ニュ', romanji: 'nyu'},
  {kana: 'ヒュ', romanji: 'hyu'},
  {kana: 'ビュ', romanji: 'byu'},
  {kana: 'ピュ', romanji: 'pyu'},
  {kana: 'ミュ', romanji: 'myu'},
  {kana: 'リュ', romanji: 'ryu'},
  {kana: 'オ', romanji: 'o'},
  {kana: 'コ', romanji: 'ko'},
  {kana: 'ゴ', romanji: 'go'},
  {kana: 'ソ', romanji: 'so'},
  {kana: 'ゾ', romanji: 'zo'},
  {kana: 'ト', romanji: 'to'},
  {kana: 'ド', romanji: 'do'},
  {kana: 'ノ', romanji: 'no'},
  {kana: 'ホ', romanji: 'ho'},
  {kana: 'ボ', romanji: 'bo'},
  {kana: 'ポ', romanji: 'po'},
  {kana: 'モ', romanji: 'mo'},
  {kana: 'ヨ', romanji: 'yo'},
  {kana: 'ロ', romanji: 'ro'},
  {kana: 'キョ', romanji: 'kyo'},
  {kana: 'ギョ', romanji: 'gyo'},
  {kana: 'ショ', romanji: 'sho'},
  {kana: 'ジョ', romanji: 'jyo'},
  {kana: 'チョ', romanji: 'cho'},
  {kana: 'ヂョ', romanji: 'dyo'},
  {kana: 'ニョ', romanji: 'nyo'},
  {kana: 'ヒョ', romanji: 'hyo'},
  {kana: 'ビョ', romanji: 'byo'},
  {kana: 'ピョ', romanji: 'pyo'},
  {kana: 'リョ', romanji: 'ryo'},
]
const kanaDisplay = document.getElementById('kana');
const inputKana = document.getElementById('inputKana');
const feedbackText = document.getElementById('feedbackText');
const sumbitBtn = document.getElementById('sumbit')

let currentItem = null;

function nextKana() {

  const selectedKana = document.querySelectorAll('#kanaSettings input[type="checkbox"]:checked');

  const activeKanaValues = Array.from(selectedKana).map(box => box.value);

  if (activeKanaValues.length == 0) {
    feedbackText.textContent = "Please select at least one";
    return;
  }

  const activeKana = kana.filter(item => activeKanaValues.includes(item.romanji))

  const randomIndex = Math.floor(Math.random() * activeKana.length);

  currentItem = activeKana[randomIndex]

  kanaDisplay.textContent = currentItem.kana
  inputKana.value = "";
  feedbackText.textContent = "";

}

function checkKana() {
  if (!currentItem) return;

  const kanaUser = inputKana.value.toLowerCase();

  if(kanaUser == currentItem.romanji) {
    setTimeout(nextKana, 750);
    feedbackText.textContent = "Correct";
  }
  else {
    setTimeout(nextKana, 750);
    feedbackText.textContent = "Incorrect. The writing is " + currentItem.romanji;
  }
}
inputKana.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    checkKana();
  }
});

nextKana();

