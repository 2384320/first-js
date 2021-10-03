const lyricsAndTitle = [
    {
        lyrics: "결국 어떻게 됐는지 벌었어 배불리 Okay 그래 내가 멍청한 걸지도",
        lyrics2: "현실을 거슬러 폼만 잡던 내 자신은 결국에 여기 제대로 질렸어",
        title: "18G 1517",
    },
    {
        lyrics: "결국에 못 뜨는 음악 결국 왜 틀을 깼냐는 듯",
        lyrics2: "반응하는 대중을 내가 어디서 감히 탓해야 쓰나",
        title: "Ugly",
    },
    {
        lyrics: "또＃이도 아닌데 연예인도 아닌 음악하는 학생 정도",
        lyrics2: "명작들이나 정독 수작들은 작품으로 치지도 않지",
        title: "수작",
    },
    {
        lyrics: "또 돈 얘기 돈 돈 돈 나도 싫어 그럼 auto mobile 얘기를 하니",
        lyrics2: "아니 이런 힙합은 돈 얘기말고 뭐있어",
        title: "Trust Us",
    },
    {
        lyrics: "그래서 우린 뛰어야 해 그래서 우린 긁어야 해",
        lyrics2:"그래서 우린 졸라야 해 그래서 우린 먹어야 해",
        title: "We are",
    },
    {
        lyrics: "어디 아픈 새＃지 물론 정신없이 사는 새＃ 어디 불려 다니면서",
        lyrics2: "물론이라며 아무한테 물론 감정은 없어 그게 악이든 선이든",
        title: "Ooh Ah",
    },
    {
        lyrics: "계급사회 찌들어 유명한 새＃ 비서 역할 따내기 게임",
        lyrics2: "내 위론 아무도 없는데 나는 누구 비위를 맞춰야 되지",
        title: "Bougie",
    },
    {
        lyrics: "Keep it up dummy 뭘 다시 그려",
        lyrics2: "진하게 연하든 연하게 진하든 미쳐버리겠는 건 똑같지 뭐",
        title: "FAD",
    },
    {
        lyrics: "이럴 바에 아주 맘을 비우고 사는 것이 더 좋을 것이다 했지만",
        lyrics2: "That 새옹지마 새옹지마",
        title: "Scale Model",
    },
    {
        lyrics: "무뇌 뿐 그래 돈은 거덜나게 벌어오니 쪽은 안 팔고 사는구나 부럽구만",
        lyrics2: "그대로들 가시게 내 입맛에는 아무래도 맞지 않더라고",
        title: "Language",
    },
];

const lyrics = document.querySelector("#lyrics span:first-child");
const lyrics2 = document.querySelectorAll("#lyrics span")[1];
const title = document.querySelector("#lyrics span:last-child");

const todaysLyrics = lyricsAndTitle[Math.floor(Math.random() * lyricsAndTitle.length)];

lyrics.innerText = todaysLyrics.lyrics;
lyrics2.innerText = `\n${todaysLyrics.lyrics2}`;
title.innerText = `\n\n${todaysLyrics.title}`;