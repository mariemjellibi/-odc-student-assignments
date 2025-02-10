const data = [
    {
      translation: "Hello",
      japanese: {
        romanization: "Kon'nichiwa",
        native: "こんにちは",
      },
      korean: {
        romanization: "Annyeonghaseyo",
        native: "안녕하세요",
      },
      turkish: {
        romanization: "Merhaba",
        native: "Merhaba",
      },
    },
    {
      translation: "Thank you",
      japanese: {
        romanization: "Arigatou gozaimasu",
        native: "ありがとうございます",
      },
      korean: {
        romanization: "Kamsahamnida",
        native: "감사합니다",
      },
      turkish: {
        romanization: "Teşekkür ederim",
        native: "Teşekkür ederim",
      },
    },
    {
      translation: "Yes",
      japanese: {
        romanization: "Hai",
        native: "はい",
      },
      korean: {
        romanization: "Ne",
        native: "네",
      },
      turkish: {
        romanization: "Evet",
        native: "Evet",
      },
    },
    {
      translation: "No",
      japanese: {
        romanization: "Iie",
        native: "いいえ",
      },
      korean: {
        romanization: "Aniyo",
        native: "아니요",
      },
      turkish: {
        romanization: "Hayır",
        native: "Hayır",
      },
    },
    {
      translation: "Excuse me",
      japanese: {
        romanization: "Sumimasen",
        native: "すみません",
      },
      korean: {
        romanization: "Sillyehamnida",
        native: "실례합니다",
      },
      turkish: {
        romanization: "Affedersiniz",
        native: "Affedersiniz",
      },
    },
    {
      translation: "I'm sorry",
      japanese: {
        romanization: "Gomen nasai",
        native: "ごめんなさい",
      },
      korean: {
        romanization: "Joesonghamnida",
        native: "죄송합니다",
      },
      turkish: {
        romanization: "Özür dilerim",
        native: "Özür dilerim",
      },
    },
    {
      translation: "Good morning",
      japanese: {
        romanization: "Ohayou gozaimasu",
        native: "おはようございます",
      },
      korean: {
        romanization: "Annyeong hashimnikka",
        native: "안녕하십니까",
      },
      turkish: {
        romanization: "Günaydın",
        native: "Günaydın",
      },
    },
    {
      translation: "Good night",
      japanese: {
        romanization: "Oyasuminasai",
        native: "おやすみなさい",
      },
      korean: {
        romanization: "Jaljayo",
        native: "잘자요",
      },
      turkish: {
        romanization: "İyi geceler",
        native: "İyi geceler",
      },
    },
    {
      translation: "How are you?",
      japanese: {
        romanization: "Ogenki desu ka?",
        native: "お元気ですか？",
      },
      korean: {
        romanization: "Eotteohke jinaeseyo?",
        native: "어떻게 지내세요?",
      },
      turkish: {
        romanization: "Nasılsınız?",
        native: "Nasılsınız?",
      },
    },
    {
      translation: "What is your name?",
      japanese: {
        romanization: "O-namae wa nan desu ka?",
        native: "お名前は何ですか？",
      },
      korean: {
        romanization: "Ireumi mwoyeyo?",
        native: "이름이 뭐예요?",
      },
      turkish: {
        romanization: "Adınız nedir?",
        native: "Adınız nedir?",
      },
    },
    {
      translation: "Nice to meet you",
      japanese: {
        romanization: "Hajimemashite",
        native: "はじめまして",
      },
      korean: {
        romanization: "Bangapseumnida",
        native: "반갑습니다",
      },
      turkish: {
        romanization: "Memnun oldum",
        native: "Memnun oldum",
      },
    },
    {
      translation: "I don't understand",
      japanese: {
        romanization: "Wakarimasen",
        native: "わかりません",
      },
      korean: {
        romanization: "Ihae mot haeyo",
        native: "이해 못 해요",
      },
      turkish: {
        romanization: "Anlamıyorum",
        native: "Anlamıyorum",
      },
    },
    {
      translation: "Please",
      japanese: {
        romanization: "Onegaishimasu",
        native: "お願いします",
      },
      korean: {
        romanization: "Jebal",
        native: "제발",
      },
      turkish: {
        romanization: "Lütfen",
        native: "Lütfen",
      },
    },
    {
      translation: "Where is the bathroom?",
      japanese: {
        romanization: "Toire wa doko desu ka?",
        native: "トイレはどこですか？",
      },
      korean: {
        romanization: "Hwajangsili eodiyeyo?",
        native: "화장실이 어디예요?",
      },
      turkish: {
        romanization: "Tuvalet nerede?",
        native: "Tuvalet nerede?",
      },
    },
    {
      translation: "How much is this?",
      japanese: {
        romanization: "Kore wa ikura desu ka?",
        native: "これはいくらですか？",
      },
      korean: {
        romanization: "Igeo eolmaeyo?",
        native: "이거 얼마예요?",
      },
      turkish: {
        romanization: "Bu ne kadar?",
        native: "Bu ne kadar?",
      },
    },
    {
      translation: "Where is the train station?",
      japanese: {
        romanization: "Eki wa doko desu ka?",
        native: "駅はどこですか？",
      },
      korean: {
        romanization: "Gichayeogeun eodiyeyo?",
        native: "기차역은 어디예요?",
      },
      turkish: {
        romanization: "Tren istasyonu nerede?",
        native: "Tren istasyonu nerede?",
      },
    },
    {
      translation: "I need help",
      japanese: {
        romanization: "Tasukete kudasai",
        native: "助けてください",
      },
      korean: {
        romanization: "Dowajuseyo",
        native: "도와주세요",
      },
      turkish: {
        romanization: "Yardıma ihtiyacım var",
        native: "Yardıma ihtiyacım var",
      },
    },
    {
      translation: "Do you speak English?",
      japanese: {
        romanization: "Eigo o hanasemasu ka?",
        native: "英語を話せますか？",
      },
      korean: {
        romanization: "Yeongeoreul hal su isseoyo?",
        native: "영어를 할 수 있어요?",
      },
      turkish: {
        romanization: "İngilizce konuşabiliyor musunuz?",
        native: "İngilizce konuşabiliyor musunuz?",
      },
    },
    {
      translation: "What time is it?",
      japanese: {
        romanization: "Ima nanji desu ka?",
        native: "今何時ですか？",
      },
      korean: {
        romanization: "Jigeum myeot siyaeyo?",
        native: "지금 몇 시예요?",
      },
      turkish: {
        romanization: "Saat kaç?",
        native: "Saat kaç?",
      },
    },
    {
      translation: "Can I have the menu, please?",
      japanese: {
        romanization: "Menyuu o kudasai",
        native: "メニューをください",
      },
      korean: {
        romanization: "Menyureul juseyo",
        native: "메뉴를 주세요",
      },
      turkish: {
        romanization: "Menüyü alabilir miyim lütfen?",
        native: "Menüyü alabilir miyim lütfen?",
      },
    },
    {
      translation: "I’m lost",
      japanese: {
        romanization: "Michi ni mayoimashita",
        native: "道に迷いました",
      },
      korean: {
        romanization: "Gireul ilheobeoryeossseoyo",
        native: "길을 잃어버렸어요",
      },
      turkish: {
        romanization: "Kayboldum",
        native: "Kayboldum",
      },
    },
    {
      translation: "How do I get to the airport?",
      japanese: {
        romanization: "Kuukou made douyatte ikimasu ka?",
        native: "空港までどうやって行きますか？",
      },
      korean: {
        romanization: "Gonghang-e eotteoke ganeungeyo?",
        native: "공항에 어떻게 가는 거예요?",
      },
      turkish: {
        romanization: "Havaalanına nasıl gidebilirim?",
        native: "Havaalanına nasıl gidebilirim?",
      },
    },
    {
      translation: "How much is this?",
      japanese: {
        romanization: "Kore wa ikura desu ka?",
        native: "これはいくらですか？",
      },
      korean: {
        romanization: "Igeo eolmaeyo?",
        native: "이거 얼마예요?",
      },
      turkish: {
        romanization: "Bu ne kadar?",
        native: "Bu ne kadar?",
      },
    },
    {
      translation: "Can I pay by card?",
      japanese: {
        romanization: "Kaado de shiharai dekimasu ka?",
        native: "カードで支払えますか？",
      },
      korean: {
        romanization: "Kadeuro gyeoljehagi doelyeo?",
        native: "카드로 결제하기 되려요?",
      },
      turkish: {
        romanization: "Kartla ödeyebilir miyim?",
        native: "Kartla ödeyebilir miyim?",
      },
    },
    {
      translation: "I like this place",
      japanese: {
        romanization: "Kono basho ga suki desu",
        native: "この場所が好きです",
      },
      korean: {
        romanization: "I goti jeongmal joayo",
        native: "이 곳이 정말 좋아요",
      },
      turkish: {
        romanization: "Bu yeri çok sevdim",
        native: "Bu yeri çok sevdim",
      },
    },
    {
      translation: "Where are you from?",
      japanese: {
        romanization: "Shusshin wa doko desu ka?",
        native: "出身はどこですか？",
      },
      korean: {
        romanization: "Eodi eseo wasseoyo?",
        native: "어디에서 왔어요?",
      },
      turkish: {
        romanization: "Nerelisiniz?",
        native: "Nerelisiniz?",
      },
    },
    {
      translation: "What do you recommend?",
      japanese: {
        romanization: "Osusume wa nan desu ka?",
        native: "おすすめは何ですか？",
      },
      korean: {
        romanization: "Mueos-eul chuchanhaeyo?",
        native: "무엇을 추천해요?",
      },
      turkish: {
        romanization: "Ne önerirsiniz?",
        native: "Ne önerirsiniz?",
      },
    },
  ];
  
  export default data;