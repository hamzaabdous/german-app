
import { GermanLesson, Level } from '../types';

export const STATIC_LESSONS: Record<Level, GermanLesson[]> = {
  'A1': [
    {
      level: 'A1',
      unit: 'Greetings & Introductions',
      vocabulary: [
        { de: 'Hallo', en: 'Hello', ar: 'مرحبا', phonetic: 'ha-loh' },
        { de: 'Guten Tag', en: 'Good day', ar: 'يوم سعيد', phonetic: 'goo-ten tahk' },
        { de: 'Wie geht es dir?', en: 'How are you?', ar: 'كيف حالك؟', phonetic: 'vee gayt es deer' },
        { de: 'Ich heiße...', en: 'My name is...', ar: 'اسمي...', phonetic: 'ikh hie-suh' },
        { de: 'Freut mich', en: 'Pleased to meet you', ar: 'سررت بلقائك', phonetic: 'froit mikh' },
        { de: 'Tschüss', en: 'Bye', ar: 'وداعا', phonetic: 'tshues' }
      ],
      grammar: "Verbs change their endings based on the person (Conjugation). \n- Ich heiße (I am called)\n- Du heißt (You are called)\n- Er/Sie/Es heißt (He/She/It is called)\nImportant: The verb stays in position 2 in a standard sentence.",
      examples: [
        { de: "Hallo, ich heiße Mark.", en: "Hello, my name is Mark.", ar: "مرحباً، اسمي مارك." },
        { de: "Wie heißt du?", en: "What is your name?", ar: "ما اسمك؟" },
        { de: "Mir geht es gut, danke.", en: "I am doing well, thanks.", ar: "أنا بخير، شكراً." }
      ],
      speaking: {
        dialogue: "A: Hallo! Ich bin Sarah. Und du?\nB: Hallo Sarah. Ich heiße Ahmed. Freut mich.\nA: Freut mich auch. Wie geht es dir?\nB: Sehr gut, danke!",
        roleplay: "Introduce yourself to a new colleague. Mention your name and ask how they are."
      },
      listening: {
        script: "Guten Tag. Mein Name ist Hans Müller. Ich komme aus Berlin. Ich bin Lehrer von Beruf. Und wer bist du?"
      },
      reading: {
        text: "Das ist Maria. Maria kommt aus Spanien, aber sie wohnt jetzt in München. Sie lernt Deutsch an einer Sprachschule. Maria ist 25 Jahre alt und sie mag Musik.",
        questions: [
          { q: "Woher kommt Maria?", options: ["Spanien", "Deutschland", "Italien"], correct: "Spanien" },
          { q: "Wo wohnt sie jetzt?", options: ["Berlin", "München", "Madrid"], correct: "München" }
        ]
      },
      writing: {
        prompt: "Write 3 sentences: Your name, where you are from, and your age.",
        sample: "Ich heiße Ali. Ich komme aus Dubai. Ich bin zwanzig Jahre alt."
      },
      pronunciation: "The 'ch' sound in 'ich' is soft. Shape your tongue like you are saying 'eee' and blow air out.",
      quiz: [
        { question: "How do you say 'Hello' in German?", options: ["Hallo", "Tschüss", "Danke"], correctAnswer: "Hallo", type: "mcq" },
        { question: "___ heißt du?", options: ["Wer", "Wie", "Was"], correctAnswer: "Wie", type: "mcq" },
        { question: "Ich ___ (heißen) Maria.", options: ["heißt", "heiße", "heißen"], correctAnswer: "heiße", type: "mcq" }
      ],
      culture: "In Germany, a firm handshake and direct eye contact are common when greeting someone for the first time."
    },
    {
      level: 'A1',
      unit: 'Food & The Accusative',
      vocabulary: [
        { de: 'der Apfel', en: 'the apple', ar: 'التفاح', phonetic: 'ap-fel' },
        { de: 'das Brot', en: 'the bread', ar: 'الخبز', phonetic: 'broht' },
        { de: 'die Milch', en: 'the milk', ar: 'الحليب', phonetic: 'milkh' },
        { de: 'essen', en: 'to eat', ar: 'يأكل', phonetic: 'es-sen' },
        { de: 'trinken', en: 'to drink', ar: 'يشرب', phonetic: 'trin-ken' },
        { de: 'der Hunger', en: 'hunger', ar: 'الجوع', phonetic: 'hoon-ger' }
      ],
      grammar: "The Accusative Case (Akkusativ) is used for the direct object. Only masculine articles change:\n- DER becomes DEN\n- DAS stays DAS\n- DIE stays DIE\nExample: 'Ich esse den Apfel' (I eat the apple).",
      examples: [
        { de: "Ich esse einen Apfel.", en: "I am eating an apple.", ar: "أنا آكل تفاحة." },
        { de: "Trinkst du einen Saft?", en: "Are you drinking a juice?", ar: "هل تشرب عصيراً؟" },
        { de: "Wir haben das Brot.", en: "We have the bread.", ar: "لدينا الخبز." }
      ],
      speaking: {
        dialogue: "A: Hast du Hunger?\nB: Ja, ich möchte etwas essen.\nA: Möchtest du einen Apfel oder ein Brot?\nB: Ich nehme den Apfel, danke.",
        roleplay: "You are at a cafe. Order a drink and a small snack using 'Ich möchte...'."
      },
      listening: {
        script: "Ich trinke morgens immer einen Kaffee mit Milch. Zum Frühstück esse ich ein Ei und ein Brot mit Käse."
      },
      reading: {
        text: "Klaus geht in den Supermarkt. Er kauft Fleisch, Gemüse and Obst. Er braucht auch eine Flasche Wasser. Klaus kocht heute Abend Spaghetti.",
        questions: [
          { q: "Was braucht Klaus?", options: ["Wasser", "Saft", "Bier"], correct: "Wasser" },
          { q: "Was kocht er?", options: ["Pizza", "Spaghetti", "Suppe"], correct: "Spaghetti" }
        ]
      },
      writing: {
        prompt: "Make a shopping list of 5 items you need for breakfast.",
        sample: "Ich brauche Milch, Eier, Brot, Butter und Honig."
      },
      pronunciation: "The 'r' in 'Brot' or 'trinken' is usually rolled slightly in the throat, similar to Arabic 'gh' (غ).",
      quiz: [
        { question: "Ich esse ___ Apfel (der).", options: ["den", "der", "dem"], correctAnswer: "den", type: "mcq" },
        { question: "Sie trinkt ___ Wasser (das).", options: ["den", "das", "die"], correctAnswer: "das", type: "mcq" },
        { question: "Haben Sie ___ Banane (die)?", options: ["einen", "ein", "eine"], correctAnswer: "eine", type: "mcq" }
      ],
      culture: "Sunday is a day of rest in Germany. Most supermarkets are closed, so people do their shopping on Saturdays."
    },
    {
      level: 'A1',
      unit: 'Numbers & Personal Info',
      vocabulary: [
        { de: 'eins', en: 'one', ar: 'واحد', phonetic: 'eints' },
        { de: 'zehn', en: 'ten', ar: 'عشرة', phonetic: 'tsayn' },
        { de: 'die Nummer', en: 'number', ar: 'الرقم', phonetic: 'noom-mer' },
        { de: 'alt', en: 'old', ar: 'قديم/عمر', phonetic: 'alt' },
        { de: 'wohnen', en: 'to live', ar: 'يسكن', phonetic: 'voh-nen' },
        { de: 'kommen', en: 'to come', ar: 'يأتي', phonetic: 'kom-men' }
      ],
      grammar: "Asking questions: Use 'Wie' (How), 'Wo' (Where), 'Woher' (Where from).\n- Wie alt bist du? (How old are you?)\n- Wo wohnst du? (Where do you live?)\n- Woher kommst du? (Where do you come from?)",
      examples: [
        { de: "Ich bin zwanzig Jahre alt.", en: "I am twenty years old.", ar: "أنا عمري عشرون عاماً." },
        { de: "Meine Telefonnummer ist 12345.", en: "My phone number is 12345.", ar: "رقم هاتفي هو 12345." },
        { de: "Ich wohne in Berlin.", en: "I live in Berlin.", ar: "أنا أسكن في برلين." }
      ],
      speaking: {
        dialogue: "A: Wie alt bist du, Maria?\nB: Ich bin zweiundzwanzig. Und du?\nA: Ich bin fünfundzwanzig.\nB: Wo wohnst du?\nA: Ich wohne jetzt in Hamburg.",
        roleplay: "Imagine you are at a registration desk. Provide your name, age, and address."
      },
      listening: {
        script: "Meine Nummer ist null, eins, sieben, sechs, vier, drei, zwei. Ich bin dreißig Jahre alt und komme aus Köln."
      },
      reading: {
        text: "Peter ist 40 Jahre alt. Er kommt aus Österreich. Er wohnt in Wien. Seine Handynummer ist 0664-987654.",
        questions: [
          { q: "Wo wohnt Peter?", options: ["Berlin", "Wien", "Zürich"], correct: "Wien" },
          { q: "Wie alt ist er?", options: ["30", "40", "50"], correct: "40" }
        ]
      },
      writing: {
        prompt: "Write your 'profile': Name, Age, Country, City, Phone number.",
        sample: "Ich heiße Max. Ich bin 19. Ich komme aus Deutschland. Ich wohne in Bonn. Meine Nummer ist 0151..."
      },
      pronunciation: "The 'v' in 'vier' (four) is pronounced like an 'f'. The 'w' in 'wohnen' is pronounced like a English 'v'.",
      quiz: [
        { question: "How do you say 10?", options: ["zehn", "zwei", "sieben"], correctAnswer: "zehn", type: "mcq" },
        { question: "___ alt bist du?", options: ["Wer", "Wie", "Wo"], correctAnswer: "Wie", type: "mcq" },
        { question: "Ich ___ in München.", options: ["wohne", "wohnst", "wohnen"], correctAnswer: "wohne", type: "mcq" }
      ],
      culture: "In Germany, people often use the 'Sie' (formal you) with adults they don't know well, especially in business or with elders."
    },
    {
      level: 'A1',
      unit: 'Family & Relations',
      vocabulary: [
        { de: 'die Mutter', en: 'mother', ar: 'الأم', phonetic: 'moot-ter' },
        { de: 'der Vater', en: 'father', ar: 'الأب', phonetic: 'fah-ter' },
        { de: 'das Kind', en: 'child', ar: 'الطفل', phonetic: 'kint' },
        { de: 'die Schwester', en: 'sister', ar: 'الأخت', phonetic: 'shves-ter' },
        { de: 'der Bruder', en: 'brother', ar: 'الأخ', phonetic: 'broo-der' },
        { de: 'die Eltern', en: 'parents', ar: 'الوالدين', phonetic: 'el-tern' }
      ],
      grammar: "Possessive Pronouns (Nominative):\n- Mein (My - masculine/neuter)\n- Meine (My - feminine/plural)\n- Dein (Your - masculine/neuter)\n- Deine (Your - feminine/plural)",
      examples: [
        { de: "Das ist meine Mutter.", en: "That is my mother.", ar: "هذه أمي." },
        { de: "Mein Bruder heißt Thomas.", en: "My brother is named Thomas.", ar: "أخي اسمه توماس." },
        { de: "Hast du Geschwister?", en: "Do you have siblings?", ar: "هل لديك إخوة؟" }
      ],
      speaking: {
        dialogue: "A: Hast du Kinder?\nB: Ja, ich habe einen Sohn und eine Tochter.\nA: Wie alt sind sie?\nB: Mein Sohn ist fünf und meine Tochter ist zwei.",
        roleplay: "Show a photo of a fictional family and describe the members using 'Das ist mein/meine...'."
      },
      listening: {
        script: "Meine Familie ist klein. Ich habe nur eine Schwester. Meine Eltern wohnen in Berlin."
      },
      reading: {
        text: "Das ist die Familie von Anna. Ihr Vater heißt Stefan und ihre Mutter heißt Helga. Anna hat zwei Brüder, aber keine Schwester.",
        questions: [
          { q: "Wie heißt Annas Mutter?", options: ["Anna", "Helga", "Maria"], correct: "Helga" },
          { q: "Hat Anna eine Schwester?", options: ["Ja", "Nein", "Vielleicht"], correct: "Nein" }
        ]
      },
      writing: {
        prompt: "Describe your family in 4 sentences.",
        sample: "Meine Familie ist groß. Ich habe drei Brüder. Meine Mutter ist Lehrerin. Wir wohnen in Kairo."
      },
      pronunciation: "The 'er' at the end of words like 'Vater' or 'Mutter' is very short and sounds almost like a soft 'ah'.",
      quiz: [
        { question: "___ Vater (der) ist alt.", options: ["Mein", "Meine", "Meinen"], correctAnswer: "Mein", type: "mcq" },
        { question: "___ Mutter (die) ist nett.", options: ["Mein", "Meine", "Meinen"], correctAnswer: "Meine", type: "mcq" },
        { question: "Hast du ___ Bruder?", options: ["einen", "eine", "ein"], correctAnswer: "einen", type: "mcq" }
      ],
      culture: "It is common in Germany for young adults to move out of their parents' house after high school to study or work in a different city."
    },
    {
      level: 'A1',
      unit: 'Daily Routine',
      vocabulary: [
        { de: 'aufstehen', en: 'to get up', ar: 'يستيقظ', phonetic: 'owf-shtay-en' },
        { de: 'frühstücken', en: 'to eat breakfast', ar: 'يفطر', phonetic: 'frue-shtue-ken' },
        { de: 'arbeiten', en: 'to work', ar: 'يعمل', phonetic: 'ar-bye-ten' },
        { de: 'schlafen', en: 'to sleep', ar: 'ينام', phonetic: 'shlah-fen' },
        { de: 'anfangen', en: 'to start', ar: 'يبدأ', phonetic: 'an-fan-gen' },
        { de: 'fernsehen', en: 'to watch TV', ar: 'يشاهد التلفاز', phonetic: 'fern-zay-en' }
      ],
      grammar: "Separable Verbs (Trennbare Verben): Verbs like 'aufstehen' or 'fernsehen' split. The prefix goes to the end of the sentence.\n- Ich stehe um 6 Uhr auf.\n- Wir sehen abends fern.",
      examples: [
        { de: "Der Kurs fängt um 9 Uhr an.", en: "The course starts at 9 AM.", ar: "الدورة تبدأ في الساعة التاسعة." },
        { de: "Ich kaufe am Samstag ein.", en: "I shop on Saturday.", ar: "أنا أتسوق يوم السبت." },
        { de: "Wann stehst du auf?", en: "When do you get up?", ar: "متى تستيقظ؟" }
      ],
      speaking: {
        dialogue: "A: Wann stehst du auf?\nB: Ich stehe um 7 Uhr auf.\nA: Und wann fängst du an zu arbeiten?\nB: Um 8 Uhr.",
        roleplay: "Tell a friend about your typical Monday morning."
      },
      listening: {
        script: "Ich stehe um sechs Uhr auf. Dann frühstücke ich. Um acht Uhr fahre ich zur Arbeit. Um siebzehn Uhr komme ich nach Hause."
      },
      reading: {
        text: "Monika arbeitet viel. Sie steht um 5 Uhr auf. Sie arbeitet von 7 bis 16 Uhr. Am Abend sieht sie ein bisschen fern und geht um 21 Uhr schlafen.",
        questions: [
          { q: "Wann steht Monika auf?", options: ["5 Uhr", "7 Uhr", "9 Uhr"], correct: "5 Uhr" },
          { q: "Was macht sie am Abend?", options: ["Sport", "Fernsehen", "Kochen"], correct: "Fernsehen" }
        ]
      },
      writing: {
        prompt: "Write 5 sentences about your day. Use at least 2 separable verbs.",
        sample: "Ich stehe um 8 Uhr auf. Ich frühstücke. Dann arbeite ich. Um 18 Uhr kaufe ich ein. Ich sehe fern."
      },
      pronunciation: "The 'st' in 'aufstehen' sounds like 'sht'. Practice: 'Shtay-en'.",
      quiz: [
        { question: "Ich ___ um 7 Uhr ___ (aufstehen).", options: ["stehe...auf", "aufstehe...", "steht...auf"], correctAnswer: "stehe...auf", type: "mcq" },
        { question: "Wann ___ der Film ___? (anfangen)", options: ["fängt...an", "anfangt...", "fange...an"], correctAnswer: "fängt...an", type: "mcq" },
        { question: "Wir ___ abends ___ (fernsehen).", options: ["sehen...fern", "fernsehen...", "sieht...fern"], correctAnswer: "sehen...fern", type: "mcq" }
      ],
      culture: "Many Germans value a strict separation between work and private life ('Feierabend'). After work, they don't like to talk about business."
    },
    {
      level: 'A1',
      unit: 'Telling the Time',
      vocabulary: [
        { de: 'die Uhrzeit', en: 'time', ar: 'الوقت/الساعة', phonetic: 'oor-tsait' },
        { de: 'viertel vor', en: 'quarter to', ar: 'إلا ربع', phonetic: 'feer-tel for' },
        { de: 'viertel nach', ar: 'ربع بعد', en: 'quarter past', phonetic: 'feer-tel nakh' },
        { de: 'halb', en: 'half past (to)', ar: 'نصف', phonetic: 'halp' },
        { de: 'spät', en: 'late', ar: 'متأخر', phonetic: 'shpate' },
        { de: 'früh', en: 'early', ar: 'مبكر', phonetic: 'frue' }
      ],
      grammar: "Telling time (Informal):\n- 8:15 = Viertel nach acht\n- 8:30 = Halb neun (Caution: half BEFORE nine!)\n- 8:45 = Viertel vor neun\nFormal time uses the 24-hour clock: 20:30 = Zwanzig Uhr dreißig.",
      examples: [
        { de: "Wie spät ist es?", en: "What time is it?", ar: "كم الساعة؟" },
        { de: "Es ist halb acht.", en: "It is 7:30.", ar: "إنها السابعة والنصف." },
        { de: "Der Zug kommt um Viertel vor zehn.", en: "The train arrives at 9:45.", ar: "القطار يصل في العاشرة إلا ربع." }
      ],
      speaking: {
        dialogue: "A: Entschuldigung, wie viel Uhr ist es?\nB: Es ist jetzt genau zehn Uhr.\nA: Danke. Wann kommt der Bus?\nB: Um Viertel nach zehn.",
        roleplay: "Ask a stranger for the time and follow up with a question about an event (movie, train, etc.)."
      },
      listening: {
        script: "Es ist jetzt fünf Uhr. Mein Termin ist um halb sechs. Ich habe noch dreißig Minuten Zeit."
      },
      reading: {
        text: "Das Kino fängt um 20 Uhr an. Es ist jetzt Viertel vor acht. Wir haben noch 15 Minuten. Der Film dauert zwei Stunden.",
        questions: [
          { q: "Wann fängt das Kino an?", options: ["19:45", "20:00", "20:15"], correct: "20:00" },
          { q: "Wie viel Zeit haben sie noch?", options: ["10 Min", "15 Min", "30 Min"], correct: "15 Min" }
        ]
      },
      writing: {
        prompt: "Write down these times in words: 7:15, 10:30, 11:45.",
        sample: "Viertel nach sieben, halb elf, Viertel vor zwölf."
      },
      pronunciation: "The 'h' in 'Uhr' is silent. It just makes the 'u' sound longer. Pronounce: 'Ooor'.",
      quiz: [
        { question: "8:30 is...", options: ["halb acht", "halb neun", "acht Uhr dreißig"], correctAnswer: "halb neun", type: "mcq" },
        { question: "10:15 is...", options: ["Viertel vor zehn", "Viertel nach zehn", "zehn Uhr"], correctAnswer: "Viertel nach zehn", type: "mcq" },
        { question: "Wie ___ ist es?", options: ["alt", "spät", "viel"], correctAnswer: "spät", type: "mcq" }
      ],
      culture: "Public transport in Germany is usually very precise. 'Pünktlichkeit' (punctuality) applies to trains and buses too!"
    },
    {
      level: 'A1',
      unit: 'At the Cafe',
      vocabulary: [
        { de: 'bestellen', en: 'to order', ar: 'يطلب', phonetic: 'be-shtel-len' },
        { de: 'bezahlen', en: 'to pay', ar: 'يدفع', phonetic: 'be-tsah-len' },
        { de: 'die Rechnung', en: 'the bill', ar: 'الفاتورة', phonetic: 'rekh-noong' },
        { de: 'der Kellner', en: 'the waiter', ar: 'النادل', phonetic: 'kel-ner' },
        { de: 'zusammen', en: 'together', ar: 'معاً', phonetic: 'tsoo-zam-men' },
        { de: 'getrennt', en: 'separately', ar: 'منفصل', phonetic: 'ge-trent' }
      ],
      grammar: "Polite Request: 'Ich möchte...' (I would like...). \nAsking for the bill: 'Die Rechnung, bitte.' or 'Zahlen, bitte.'\nAsking if they pay together or separate: 'Zusammen oder getrennt?'",
      examples: [
        { de: "Ich möchte einen Kaffee, bitte.", en: "I would like a coffee, please.", ar: "أود قهوة من فضلك." },
        { de: "Wir möchten bezahlen.", en: "We would like to pay.", ar: "نود أن ندفع." },
        { de: "Stimmt so.", en: "Keep the change.", ar: "احتفظ بالباقي." }
      ],
      speaking: {
        dialogue: "A: Guten Tag, was möchten Sie bestellen?\nB: Einen Tee und ein Stück Kuchen, bitte.\nA: Kommt sofort.\n... (later) ...\nB: Zahlen, bitte! Getrennt.\nA: Das macht 6 Euro.",
        roleplay: "You are at a cafe with a friend. Order your favorite drink and ask to pay separately."
      },
      listening: {
        script: "Ich nehme eine Cola. Und was möchtest du? Ein Wasser? Okay. Herr Ober, bitte ein Wasser und eine Cola!"
      },
      reading: {
        text: "Im Cafe 'Sonne' kostet ein Kaffee 3 Euro. Ein Apfelkuchen kostet 4 Euro. Maria und Peter bestellen zwei Kaffee und einen Kuchen. Das macht zusammen 10 Euro.",
        questions: [
          { q: "Was kostet der Kuchen?", options: ["3 Euro", "4 Euro", "10 Euro"], correct: "4 Euro" },
          { q: "Wie viel bezahlen sie insgesamt?", options: ["7 Euro", "10 Euro", "12 Euro"], correct: "10 Euro" }
        ]
      },
      writing: {
        prompt: "Write a short dialogue between a waiter and a customer.",
        sample: "- Was möchten Sie? - Einen Tee. - Sonst noch was? - Nein danke. - Zahlen bitte. - 2 Euro."
      },
      pronunciation: "The 'z' in 'bezahlen' or 'zusammen' is pronounced like 'ts'. Try: 'Tsoo-zam-men'.",
      quiz: [
        { question: "How to say 'I would like'?", options: ["Ich mag", "Ich möchte", "Ich will"], correctAnswer: "Ich möchte", type: "mcq" },
        { question: "Paying 'together' is...", options: ["getrennt", "zusammen", "allein"], correctAnswer: "zusammen", type: "mcq" },
        { question: "The waiter asks: 'Zusammen oder ___?'", options: ["kaputt", "getrennt", "fertig"], correctAnswer: "getrennt", type: "mcq" }
      ],
      culture: "In Germany, it is very common to pay 'getrennt' (separately) even when eating with friends. Tipping around 5-10% is expected."
    },
    {
      level: 'A1',
      unit: 'Transportation',
      vocabulary: [
        { de: 'die Fahrkarte', en: 'ticket', ar: 'التذكرة', phonetic: 'fahr-kar-te' },
        { de: 'der Bahnhof', en: 'train station', ar: 'محطة القطار', phonetic: 'bahn-hof' },
        { de: 'das Gleis', en: 'platform', ar: 'الرصيف', phonetic: 'glice' },
        { de: 'umsteigen', en: 'to change (trains)', ar: 'يبدل (القطار)', phonetic: 'oom-shtai-gen' },
        { de: 'verspätet', en: 'delayed', ar: 'متأخر', phonetic: 'fer-shpay-tet' },
        { de: 'einfach', en: 'one way', ar: 'ذهاب فقط', phonetic: 'ein-fakh' }
      ],
      grammar: "Modal Verb 'können' (can/be able to):\n- Ich kann (I can)\n- Du kannst (You can)\n- Er/Sie/Es kann (He can)\n- Wir können (We can)\nThe main verb goes to the end in the infinitive: 'Ich kann eine Fahrkarte kaufen.'",
      examples: [
        { de: "Wo kann ich eine Fahrkarte kaufen?", en: "Where can I buy a ticket?", ar: "أين يمكنني شراء تذكرة؟" },
        { de: "Der Zug hat 10 Minuten Verspätung.", en: "The train is 10 minutes late.", ar: "القطار متأخر 10 دقائق." },
        { de: "Muss ich umsteigen?", en: "Do I have to change trains?", ar: "هل يجب علي تبديل القطار؟" }
      ],
      speaking: {
        dialogue: "A: Eine Fahrkarte nach Berlin, bitte.\nB: Einfach oder hin und zurück?\nA: Hin und zurück.\nB: Das macht 45 Euro. Der Zug fährt von Gleis 4.",
        roleplay: "Ask at the information desk about the next train to Munich and which platform it leaves from."
      },
      listening: {
        script: "Achtung am Gleis zwei! Der Zug aus Frankfurt kommt jetzt an. Bitte Vorsicht bei der Einfahrt."
      },
      reading: {
        text: "Lisa möchte nach Köln fahren. Der Zug fährt um 14 Uhr ab. Sie must in Frankfurt umsteigen. Die Fahrt dauert insgesamt drei Stunden.",
        questions: [
          { q: "Wo must Lisa umsteigen?", options: ["Köln", "Frankfurt", "Berlin"], correct: "Frankfurt" },
          { q: "Wann fährt der Zug ab?", options: ["14 Uhr", "15 Uhr", "17 Uhr"], correct: "14 Uhr" }
        ]
      },
      writing: {
        prompt: "Write a short note: You are late because the train is delayed.",
        sample: "Hallo, ich komme später. Der Zug hat 20 Minuten Verspätung. Bis gleich!"
      },
      pronunciation: "The 'ei' in 'Gleis' or 'umsteigen' sounds like 'eye'.",
      quiz: [
        { question: "Where is the train station?", options: ["Wo ist der Bahnhof?", "Wie ist der Bahnhof?", "Wer ist der Bahnhof?"], correctAnswer: "Wo ist der Bahnhof?", type: "mcq" },
        { question: "A 'return ticket' is...", options: ["einfach", "hin und zurück", "Gleis"], correctAnswer: "hin and zurück", type: "mcq" },
        { question: "Ich ___ (können) schwimmen.", options: ["kann", "kannst", "können"], correctAnswer: "kann", type: "mcq" }
      ],
      culture: "The 'Deutsche Bahn' app is the most important tool for traveling in Germany. You can buy tickets and check live delays there."
    },
    {
      level: 'A1',
      unit: 'Hobbies & Free Time',
      vocabulary: [
        { de: 'lesen', en: 'to read', ar: 'يقرأ', phonetic: 'lay-zen' },
        { de: 'schwimmen', en: 'to swim', ar: 'يسبح', phonetic: 'shvim-men' },
        { de: 'kochen', en: 'to cook', ar: 'يطبخ', phonetic: 'ko-khen' },
        { de: 'das Hobby', en: 'hobby', ar: 'الهواية', phonetic: 'hob-bee' },
        { de: 'gern', en: 'gladly / like to', ar: 'بسرور', phonetic: 'gern' },
        { de: 'treffen', en: 'to meet', ar: 'يقابل', phonetic: 'tref-fen' }
      ],
      grammar: "Verbs with Stem Changes: Some verbs change their vowel in 'du' and 'er/sie/es'.\n- Lesen: Ich lese, DU LIEST, ER LIEST.\n- Treffen: Ich treffe, DU TRIFFST, ER TRIFFT.\nUsing 'gern' to express liking: 'Ich koche gern' (I like cooking).",
      examples: [
        { de: "Was sind deine Hobbys?", en: "What are your hobbies?", ar: "ما هي هواياتك؟" },
        { de: "Liest du gern Bücher?", en: "Do you like reading books?", ar: "هل تحب قراءة الكتب؟" },
        { de: "Ich treffe am Wochenende meine Freunde.", en: "I meet my friends on the weekend.", ar: "أقابل أصدقائي في عطلة نهاية الأسبوع." }
      ],
      speaking: {
        dialogue: "A: Was machst du gern in deiner Freizeit?\nB: Ich spiele gern Fußball und ich schwimme gern.\nA: Und triffst du auch Freunde?\nB: Ja, oft am Samstagabend.",
        roleplay: "Interview a partner about what they do and don't like doing in their free time."
      },
      listening: {
        script: "Mein Hobby ist Fotografieren. Ich gehe oft in den Park und mache Fotos von Blumen und Bäumen."
      },
      reading: {
        text: "Thomas hat viele Hobbys. Er spielt Gitarre, er kocht gern für seine Familie und er läuft jeden Morgen im Wald. Sein Bruder Markus spielt lieber Videospiele.",
        questions: [
          { q: "Was macht Thomas jeden Morgen?", options: ["Gitarre spielen", "Kochen", "Laufen"], correct: "Laufen" },
          { q: "Wer spielt Videospiele?", options: ["Thomas", "Markus", "Vater"], correct: "Markus" }
        ]
      },
      writing: {
        prompt: "Write 3 sentences about your hobbies using 'gern'.",
        sample: "Ich höre gern Musik. Ich schwimme gern. Ich lerne gern Deutsch."
      },
      pronunciation: "The 'g' in 'gern' is hard like in 'go'. The 'er' is a vocalic 'r' (soft 'ah').",
      quiz: [
        { question: "Du ___ (lesen) ein Buch.", options: ["lest", "liest", "lesest"], correctAnswer: "liest", type: "mcq" },
        { question: "I like cooking = Ich ___ gern.", options: ["koche", "kochen", "kocht"], correctAnswer: "koche", type: "mcq" },
        { question: "Er ___ (treffen) Freunde.", options: ["trefft", "trifft", "treffen"], correctAnswer: "trifft", type: "mcq" }
      ],
      culture: "Vereine (Clubs) are very popular in Germany. Many people join sports clubs, music clubs, or hiking clubs to meet others."
    },
    {
      level: 'A1',
      unit: 'Colors & Descriptions',
      vocabulary: [
        { de: 'rot', en: 'red', ar: 'أحمر', phonetic: 'roht' },
        { de: 'blau', en: 'blue', ar: 'أزرق', phonetic: 'blow' },
        { de: 'grün', en: 'green', ar: 'أخضر', phonetic: 'groon' },
        { de: 'groß', en: 'big/tall', ar: 'كبير', phonetic: 'grohs' },
        { de: 'klein', en: 'small', ar: 'صغير', phonetic: 'kline' },
        { de: 'schön', en: 'beautiful', ar: 'جميل', phonetic: 'shoen' }
      ],
      grammar: "Adjectives as Predicates: When used after the verb 'sein', adjectives do not change their ending.\n- Das Haus ist rot. (The house is red.)\n- Die Blumen sind schön. (The flowers are beautiful.)",
      examples: [
        { de: "Der Himmel ist heute blau.", en: "The sky is blue today.", ar: "السماء زرقاء اليوم." },
        { de: "Mein Auto ist klein und schwarz.", en: "My car is small and black.", ar: "سيارتي صغيرة وسوداء." },
        { de: "Das Bild ist sehr schön.", en: "The picture is very beautiful.", ar: "الصورة جميلة جداً." }
      ],
      speaking: {
        dialogue: "A: Gefällt dir das Kleid?\nB: Ja, aber die Farbe ist nicht gut.\nA: Welche Farbe möchtest du?\nB: Ich hätte es gern in Blau.",
        roleplay: "Describe 3 objects in the room using colors and size adjectives (big, small, old, new)."
      },
      listening: {
        script: "Mein Haus ist weiß und hat ein rotes Dach. Im Garten sind viele grüne Bäume."
      },
      reading: {
        text: "Das ist ein Apfel. Er ist rot und rund. Er schmeckt gut. Da ist auch eine Banane. Sie ist gelb und lang.",
        questions: [
          { q: "Welche Farbe hat the Apfel?", options: ["gelb", "rot", "grün"], correct: "rot" },
          { q: "Ist die Banane kurz?", options: ["Ja", "Nein", "Vielleicht"], correct: "Nein" }
        ]
      },
      writing: {
        prompt: "Describe your favorite piece of clothing (color and look).",
        sample: "Meine Lieblingsjacke ist dunkelblau. Sie ist alt, aber sehr bequem und schön."
      },
      pronunciation: "The 'ö' in 'schön' is formed by saying 'eee' with lips rounded in an 'O' shape.",
      quiz: [
        { question: "What is 'blue'?", options: ["blau", "gelb", "rot"], correctAnswer: "blau", type: "mcq" },
        { question: "Das Haus ist ___ (big).", options: ["groß", "klein", "neu"], correctAnswer: "groß", type: "mcq" },
        { question: "Der Baum ist ___ (green).", options: ["weiß", "grün", "schwarz"], correctAnswer: "grün", type: "mcq" }
      ],
      culture: "German architecture varies: 'Fachwerkhäuser' (half-timbered houses) are famous for their brown wooden beams and white walls."
    },
    {
      level: 'A1',
      unit: 'Days, Months & Dates',
      vocabulary: [
        { de: 'Montag', en: 'Monday', ar: 'الاثنين', phonetic: 'mohn-tahk' },
        { de: 'heute', en: 'today', ar: 'اليوم', phonetic: 'hoy-te' },
        { de: 'morgen', en: 'tomorrow', ar: 'غداً', phonetic: 'mor-gen' },
        { de: 'der Monat', en: 'month', ar: 'الشهر', phonetic: 'moh-nat' },
        { de: 'Januar', en: 'January', ar: 'يناير', phonetic: 'yan-oo-ar' },
        { de: 'das Jahr', en: 'year', ar: 'السنة', phonetic: 'yahr' }
      ],
      grammar: "Prepositions with Time:\n- AM + Days/Parts of the day: am Montag, am Vormittag (Exception: in der Nacht).\n- IM + Months/Seasons: im Januar, im Sommer.\n- UM + Time: um 8 Uhr.",
      examples: [
        { de: "Am Montag arbeite ich nicht.", en: "On Monday I don't work.", ar: "يوم الاثنين أنا لا أعمل." },
        { de: "Mein Geburtstag ist im März.", en: "My birthday is in March.", ar: "عيد ميلادي في مارس." },
        { de: "Heute ist Dienstag.", en: "Today is Tuesday.", ar: "اليوم هو الثلاثاء." }
      ],
      speaking: {
        dialogue: "A: Welcher Tag ist heute?\nB: Heute ist Mittwoch.\nA: Und wann hast du Zeit?\nB: Am Freitagabend um sieben Uhr.",
        roleplay: "Schedule a meeting with a friend. Negotiate the day and time."
      },
      listening: {
        script: "Wir haben heute den zehnten Mai. Es ist Frühling und das Wetter ist sehr schön."
      },
      reading: {
        text: "Ein Jahr hat zwölf Monate. Der erste Monat ist Januar. Im Dezember ist es oft kalt. Mein Lieblingsmonat ist der Juni, weil da Sommer ist.",
        questions: [
          { q: "Wie viele Monate hat ein Jahr?", options: ["10", "12", "7"], correct: "12" },
          { q: "Wie ist der erste Monat?", options: ["Februar", "Januar", "März"], correct: "Januar" }
        ]
      },
      writing: {
        prompt: "Write the 7 days of the week in order.",
        sample: "Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag."
      },
      pronunciation: "The 'h' in 'Jahr' is silent, but the 'a' is long. Like 'Yaahr'.",
      quiz: [
        { question: "___ Montag gehe ich zum Sport.", options: ["Im", "Am", "Um"], correctAnswer: "Am", type: "mcq" },
        { question: "___ Januar ist es kalt.", options: ["Im", "Am", "Um"], correctAnswer: "Im", type: "mcq" },
        { question: "___ 10 Uhr fängt die Schule an.", options: ["Im", "Am", "Um"], correctAnswer: "Um", type: "mcq" }
      ],
      culture: "The weekend (Wochenende) starts for many on Friday afternoon. Saturday is for chores/shopping, Sunday for family/rest."
    },
    {
      level: 'A1',
      unit: 'Weather & Seasons',
      vocabulary: [
        { de: 'die Sonne', en: 'sun', ar: 'الشمس', phonetic: 'zon-ne' },
        { de: 'regnen', en: 'to rain', ar: 'تمطر', phonetic: 'reg-nen' },
        { de: 'kalt', en: 'cold', ar: 'بارد', phonetic: 'kalt' },
        { de: 'warm', en: 'warm', ar: 'دافئ', phonetic: 'varm' },
        { de: 'der Schnee', en: 'snow', ar: 'الثلج', phonetic: 'shnay' },
        { de: 'windig', en: 'windy', ar: 'عاصف', phonetic: 'vin-dikh' }
      ],
      grammar: "Using 'Es' for weather:\n- Es regnet. (It is raining.)\n- Es schneit. (It is snowing.)\n- Es ist sonnig. (It is sunny.)\n- Mir ist kalt. (I am cold - literally: To me it is cold).",
      examples: [
        { de: "Wie ist das Wetter heute?", en: "How is the weather today?", ar: "كيف حال الطقس اليوم؟" },
        { de: "Im Winter schneit es oft.", en: "In winter it often snows.", ar: "في الشتاء تثلج غالباً." },
        { de: "Morgen wird es sonnig und warm.", en: "Tomorrow it will be sunny and warm.", ar: "غداً سيكون مشمساً ودافئاً." }
      ],
      speaking: {
        dialogue: "A: Regnet es draußen?\nB: Ja, es regnet sehr stark.\nA: Oh nein, ich habe keinen Regenschirm.\nB: Es ist auch sehr windig.",
        roleplay: "Look out of a virtual window and describe the current weather conditions."
      },
      listening: {
        script: "Guten Morgen. Das Wetter heute: Im Norden regnet es, aber im Süden scheint die Sonne. Es wird 20 Grad warm."
      },
      reading: {
        text: "Es gibt vier Jahreszeiten: Frühling, Sommer, Herbst und Winter. Im Sommer ist es heiß und die Sonne scheint. Im Herbst fallen die Blätter von den Bäumen.",
        questions: [
          { q: "Wie viele Jahreszeiten gibt es?", options: ["zwei", "drei", "vier"], correct: "vier" },
          { q: "Wann ist es heiß?", options: ["Winter", "Sommer", "Herbst"], correct: "Sommer" }
        ]
      },
      writing: {
        prompt: "Describe your favorite season in 3 sentences.",
        sample: "Mein Lieblingsjahreszeit ist der Frühling. Es ist nicht zu kalt. Alles wird grün und schön."
      },
      pronunciation: "The 'v' in 'warm' is a soft English 'v' sound. The 'w' in 'windig' is also an English 'v'.",
      quiz: [
        { question: "It is raining = Es ___.", options: ["regnet", "schneit", "sonne"], correctAnswer: "regnet", type: "mcq" },
        { question: "What is 'sun'?", options: ["Mond", "Sonne", "Stern"], correctAnswer: "Sonne", type: "mcq" },
        { question: "In summer it is ___.", options: ["kalt", "warm", "eisig"], correctAnswer: "warm", type: "mcq" }
      ],
      culture: "Germans love talking about the weather. 'Es gibt kein schlechtes Wetter, nur schlechte Kleidung' (There is no bad weather, only bad clothing) is a famous saying."
    },
    {
      level: 'A1',
      unit: 'My Apartment',
      vocabulary: [
        { de: 'der Tisch', en: 'table', ar: 'الطاولة', phonetic: 'tish' },
        { de: 'der Stuhl', en: 'chair', ar: 'الكرسي', phonetic: 'shtool' },
        { de: 'das Bett', en: 'bed', ar: 'السرير', phonetic: 'bet' },
        { de: 'der Schrank', en: 'wardrobe/closet', ar: 'الخزانة', phonetic: 'shrank' },
        { de: 'die Lampe', en: 'lamp', ar: 'المصباح', phonetic: 'lam-pe' },
        { de: 'das Bild', en: 'picture', ar: 'الصورة', phonetic: 'bilt' }
      ],
      grammar: "Indefinite Articles (Nominative):\n- Ein (masculine/neuter)\n- Eine (feminine)\nNegation with 'kein':\n- Das ist EIN Tisch. -> Das ist KEIN Tisch. (That is not a table.)",
      examples: [
        { de: "Das ist ein schöner Schrank.", en: "That is a beautiful closet.", ar: "هذه خزانة جميلة." },
        { de: "Ich habe kein Bett.", en: "I don't have a bed.", ar: "ليس لدي سرير." },
        { de: "Wo steht die Lampe?", en: "Where is the lamp?", ar: "أين يوجد المصباح؟" }
      ],
      speaking: {
        dialogue: "A: Ist das ein Stuhl?\nB: Nein, das ist kein Stuhl, das ist ein Sessel.\nA: Er ist sehr bequem.\nB: Ja, und er war nicht teuer.",
        roleplay: "You are at an IKEA. Point to furniture items and ask your partner for their opinion using 'Wie findest du...'."
      },
      listening: {
        script: "Mein Zimmer ist klein. Es gibt ein Bett, einen Schreibtisch und ein Regal. An der Wand hängt ein Bild."
      },
      reading: {
        text: "Das Wohnzimmer von Familie Müller ist groß. In der Mitte steht ein großer Tisch mit sechs Stühlen. In der Ecke steht ein Fernseher.",
        questions: [
          { q: "Wie viele Stühle gibt es?", options: ["vier", "sechs", "acht"], correct: "sechs" },
          { q: "Was steht in der Ecke?", options: ["Lampe", "Fernseher", "Bett"], correct: "Fernseher" }
        ]
      },
      writing: {
        prompt: "List 5 items you have in your living room.",
        sample: "Ich habe ein Sofa, einen Tisch, zwei Stühle, eine Lampe und ein Regal."
      },
      pronunciation: "The 'st' in 'Stuhl' is 'sht'. The 'sch' in 'Schrank' is 'sh'.",
      quiz: [
        { question: "Das ist ___ Lampe (die).", options: ["ein", "eine", "kein"], correctAnswer: "eine", type: "mcq" },
        { question: "Das ist ___ Tisch (der).", options: ["ein", "eine", "kein"], correctAnswer: "ein", type: "mcq" },
        { question: "I have no picture = Ich habe ___ Bild (das).", options: ["kein", "keine", "keinen"], correctAnswer: "kein", type: "mcq" }
      ],
      culture: "It is common for Germans to take their kitchen with them when they move to a new apartment, as rental units are often empty."
    },
    {
      level: 'A1',
      unit: 'Body Parts',
      vocabulary: [
        { de: 'der Kopf', en: 'head', ar: 'الرأس', phonetic: 'kopf' },
        { de: 'das Auge', en: 'eye', ar: 'العين', phonetic: 'ow-ge' },
        { de: 'die Hand', en: 'hand', ar: 'اليد', phonetic: 'hant' },
        { de: 'der Arm', en: 'arm', ar: 'الذراع', phonetic: 'arm' },
        { de: 'das Bein', en: 'leg', ar: 'الساق', phonetic: 'bine' },
        { de: 'der Rücken', en: 'back', ar: 'الظهر', phonetic: 'rue-ken' }
      ],
      grammar: "Plurals: German plurals are varied.\n- der Arm -> die Arme\n- das Auge -> die Augen\n- die Hand -> die Hände\n- das Bein -> die Beine\nAlways learn the plural form with the noun!",
      examples: [
        { de: "Mein Rücken tut weh.", en: "My back hurts.", ar: "ظهري يؤلمني." },
        { de: "Sie hat blaue Augen.", en: "She has blue eyes.", ar: "لديها عينان زرقاوان." },
        { de: "Hebe deinen rechten Arm.", en: "Lift your right arm.", ar: "ارفع ذراعك اليمنى." }
      ],
      speaking: {
        dialogue: "A: Was hast du?\nB: Ich habe Kopfschmerzen.\nA: Oh, das tut mir leid. Möchtest du eine Tablette?\nB: Nein danke, ich lege mich kurz hin.",
        roleplay: "Describe yourself or a friend (e.g., 'He has big hands', 'She has brown eyes')."
      },
      listening: {
        script: "Mein Bruder ist sehr sportlich. Er hat starke Arme und lange Beine. Er läuft jeden Tag."
      },
      reading: {
        text: "Der menschliche Körper hat zwei Augen, zwei Ohren, eine Nase und einen Mund. Wir haben zwei Hände und zwei Füße.",
        questions: [
          { q: "Wie viele Augen haben wir?", options: ["eins", "zwei", "drei"], correct: "zwei" },
          { q: "Was haben wir nur einmal?", options: ["Nase", "Ohr", "Hand"], correct: "Nase" }
        ]
      },
      writing: {
        prompt: "Write 5 body parts and their plural forms.",
        sample: "Hand - Hände, Auge - Augen, Bein - Beine, Arm - Arme, Fuß - Füße."
      },
      pronunciation: "The 'ue' in 'Rücken' is a rounded 'eee' sound. The 'pf' in 'Kopf' should both be pronounced quickly.",
      quiz: [
        { question: "Plural of 'die Hand'?", options: ["Hande", "Hände", "Handen"], correctAnswer: "Hände", type: "mcq" },
        { question: "What is 'eye'?", options: ["Ohr", "Auge", "Nase"], correctAnswer: "Auge", type: "mcq" },
        { question: "Mein ___ tut weh (the head).", options: ["Kopf", "Hand", "Bein"], correctAnswer: "Kopf", type: "mcq" }
      ],
      culture: "In Germany, people often use homeopathy or herbal tea (Kräutertee) for minor aches before taking strong medicine."
    },
    {
      level: 'A1',
      unit: 'Clothing & Shopping',
      vocabulary: [
        { de: 'das T-Shirt', en: 'T-shirt', ar: 'قميص', phonetic: 'tee-shirt' },
        { de: 'die Hose', en: 'trousers/pants', ar: 'بنطال', phonetic: 'ho-ze' },
        { de: 'der Schuh', en: 'shoe', ar: 'حذاء', phonetic: 'shoo' },
        { de: 'kaufen', en: 'to buy', ar: 'يشتري', phonetic: 'kow-fen' },
        { de: 'teuer', en: 'expensive', ar: 'غالٍ', phonetic: 'toy-er' },
        { de: 'billig', en: 'cheap', ar: 'رخيص', phonetic: 'bil-likh' }
      ],
      grammar: "Demonstrative Pronouns (this/that):\n- Dieser (masculine)\n- Dieses (neuter)\n- Diese (feminine/plural)\nExample: 'Dieser Schuh ist teuer.'",
      examples: [
        { de: "Diese Hose passt mir nicht.", en: "These pants don't fit me.", ar: "هذا البنطال لا يناسبني." },
        { de: "Ich kaufe dieses T-Shirt.", en: "I am buying this T-shirt.", ar: "أنا أشتري هذا القميص." },
        { de: "Sind die Schuhe billig?", en: "Are the shoes cheap?", ar: "هل الأحذية رخيصة؟" }
      ],
      speaking: {
        dialogue: "A: Kann ich Ihnen helfen?\nB: Ja, ich suche eine Hose.\nA: Welche Größe haben Sie?\nB: Größe 38. Haben Sie diese Hose auch in Schwarz?",
        roleplay: "Go shopping for an outfit. Ask for a specific size and color."
      },
      listening: {
        script: "Ich brauche neue Schuhe für den Winter. Diese braunen Stiefel gefallen mir sehr gut. Sie kosten nur fünfzig Euro."
      },
      reading: {
        text: "Im Kaufhaus gibt es viele Angebote. Ein Hemd kostet 15 Euro. Ein Rock kostet 20 Euro. Die Kleidung ist heute sehr billig.",
        questions: [
          { q: "Was kostet das Hemd?", options: ["15 Euro", "20 Euro", "30 Euro"], correct: "15 Euro" },
          { q: "Ist die Kleidung teuer?", options: ["Ja", "Nein", "Ein bisschen"], correct: "Nein" }
        ]
      },
      writing: {
        prompt: "Describe what you are wearing today.",
        sample: "Heute trage ich eine blaue Jeans, ein weißes T-Shirt und schwarze Schuhe."
      },
      pronunciation: "The 'h' in 'Hose' or 'Schuh' is often silent (long vowel) or just an aspiration at the start.",
      quiz: [
        { question: "What is 'expensive'?", options: ["billig", "teuer", "schön"], correctAnswer: "teuer", type: "mcq" },
        { question: "Plural of 'der Schuh'?", options: ["die Schuh", "die Schuhe", "die Schuhen"], correctAnswer: "die Schuhe", type: "mcq" },
        { question: "This T-shirt = ___ T-Shirt.", options: ["Dieser", "Dieses", "Diese"], correctAnswer: "Dieses", type: "mcq" }
      ],
      culture: "Second-hand shopping and flea markets (Flohmärkte) are very trendy and popular in Germany for finding unique clothes."
    },
    {
      level: 'A1',
      unit: 'Health & Feeling Sick',
      vocabulary: [
        { de: 'krank', en: 'sick', ar: 'مريض', phonetic: 'krank' },
        { de: 'gesund', en: 'healthy', ar: 'سليم/صحي', phonetic: 'ge-zoont' },
        { de: 'der Arzt', en: 'doctor', ar: 'طبيب', phonetic: 'artst' },
        { de: 'die Medizin', en: 'medicine', ar: 'الدواء', phonetic: 'may-dee-tseen' },
        { de: 'weh tun', en: 'to hurt', ar: 'يؤلم', phonetic: 'vay toon' },
        { de: 'das Fieber', en: 'fever', ar: 'الحمى', phonetic: 'fee-ber' }
      ],
      grammar: "Dative Personal Pronouns: Used with 'weh tun' (to hurt).\n- Mir tut der Kopf weh. (My head hurts - To me...)\n- Dir tut der Arm weh. (Your arm hurts - To you...)",
      examples: [
        { de: "Ich bin krank und bleibe im Bett.", en: "I am sick and stay in bed.", ar: "أنا مريض وسأبقى في السرير." },
        { de: "Haben Sie Fieber?", en: "Do you have a fever?", ar: "هل لديك حمى؟" },
        { de: "Gute Besserung!", en: "Get well soon!", ar: "أتمنى لك الشفاء العاجل!" }
      ],
      speaking: {
        dialogue: "A: Hallo Thomas, wie geht es dir?\nB: Nicht gut, ich fühle mich krank.\nA: Was hast du?\nB: Mein Hals tut weh und ich habe Husten.",
        roleplay: "Call your boss to say you are sick and cannot come to work today."
      },
      listening: {
        script: "Frau Meier hat starke Bauchschmerzen. Sie geht zum Arzt. Der Arzt sagt: Trinken Sie viel Tee und schlafen Sie viel."
      },
      reading: {
        text: "Wenn man krank ist, geht man in Deutschland zum Hausarzt. Man braucht einen Termin. In der Apotheke kauft man dann die Medizin.",
        questions: [
          { q: "Wohin geht man, wenn man krank ist?", options: ["Schule", "Hausarzt", "Kino"], correct: "Hausarzt" },
          { q: "Wo kauft man Medizin?", options: ["Supermarkt", "Apotheke", "Bahnhof"], correct: "Apotheke" }
        ]
      },
      writing: {
        prompt: "Write a short email to your teacher: You are sick and won't be in class.",
        sample: "Lieber Lehrer, ich bin heute krank. Ich habe Fieber. Ich komme nicht zum Kurs. Viele Grüße."
      },
      pronunciation: "The 'z' in 'Arzt' is a sharp 'ts' sound. Practice: 'Art-st'.",
      quiz: [
        { question: "I am sick = Ich bin ___.", options: ["gesund", "krank", "lustig"], correctAnswer: "krank", type: "mcq" },
        { question: "My head hurts = ___ tut der Kopf weh.", options: ["Mir", "Ich", "Mich"], correctAnswer: "Mir", type: "mcq" },
        { question: "What is 'doctor'?", options: ["der Arzt", "der Lehrer", "der Koch"], correctAnswer: "der Arzt", type: "mcq" }
      ],
      culture: "If you are sick for more than 3 days, you usually need an 'Attest' (sick note) from a doctor for your employer in Germany."
    },
    {
      level: 'A1',
      unit: 'Jobs & Occupations',
      vocabulary: [
        { de: 'der Lehrer', en: 'teacher (male)', ar: 'المعلم', phonetic: 'lay-rer' },
        { de: 'die Lehrerin', en: 'teacher (female)', ar: 'المعلمة', phonetic: 'lay-re-rin' },
        { de: 'der Student', en: 'student', ar: 'طالب جامعي', phonetic: 'shtoo-dent' },
        { de: 'arbeiten als', en: 'to work as', ar: 'يعمل كـ', phonetic: 'ar-bye-ten als' },
        { de: 'arbeitslos', en: 'unemployed', ar: 'عاطل عن العمل', phonetic: 'ar-byets-lohs' },
        { de: 'der Beruf', en: 'profession', ar: 'المهنة', phonetic: 'be-roof' }
      ],
      grammar: "Feminine forms of jobs: Most jobs add '-in' to become feminine.\n- der Koch (cook) -> die Köchin\n- der Arzt (doctor) -> die Ärztin\n- der Kellner (waiter) -> die Kellnerin",
      examples: [
        { de: "Was bist du von Beruf?", en: "What is your profession?", ar: "ما هي مهنتك؟" },
        { de: "Ich arbeite als Ingenieur.", en: "I work as an engineer.", ar: "أنا أعمل كمهندس." },
        { de: "Meine Mutter ist Ärztin.", en: "My mother is a doctor.", ar: "أمي طبيبة." }
      ],
      speaking: {
        dialogue: "A: Was machen Sie beruflich?\nB: Ich bin Verkäuferin bei Lidl. Und Sie?\nA: Ich studiere Informatik.\nB: Oh, das ist interessant!",
        roleplay: "You are at a party. Ask three people what they do for a living."
      },
      listening: {
        script: "Mein Vater ist Polizist. Er arbeitet viel, auch am Wochenende. Meine Schwester ist noch Schülerin."
      },
      reading: {
        text: "In Deutschland gibt es viele Berufe. Viele Menschen arbeiten im Büro oder in der Industrie. Manche arbeiten auch von zu Hause aus.",
        questions: [
          { q: "Wo arbeiten viele Menschen?", options: ["Büro", "Park", "Wald"], correct: "Büro" },
          { q: "Wie heißt die weibliche Form von 'Kellner'?", options: ["Kellner", "Kellnerin", "Kellneren"], correct: "Kellnerin" }
        ]
      },
      writing: {
        prompt: "Write about your job or your dream job.",
        sample: "Ich arbeite als Sekretärin. Ich mag meine Arbeit. Mein Traumberuf ist Journalistin."
      },
      pronunciation: "The 'st' in 'Student' is 'sht'. The 'sch' in 'Schüler' is 'sh'.",
      quiz: [
        { question: "Male teacher = ___.", options: ["der Lehrer", "die Lehrerin", "das Lehrer"], correctAnswer: "der Lehrer", type: "mcq" },
        { question: "Female doctor = ___.", options: ["die Arzt", "die Ärztin", "der Ärztin"], correctAnswer: "die Ärztin", type: "mcq" },
        { question: "What is 'profession'?", options: ["der Beruf", "der Job", "der Name"], correctAnswer: "der Beruf", type: "mcq" }
      ],
      culture: "Germany has a 'Duales System' (dual system) for vocational training, where students learn in a company and a school simultaneously."
    },
    {
      level: 'A1',
      unit: 'City Map & Places',
      vocabulary: [
        { de: 'die Stadt', en: 'city', ar: 'المدينة', phonetic: 'shtat' },
        { de: 'das Museum', en: 'museum', ar: 'المتحف', phonetic: 'moo-zay-oom' },
        { de: 'der Park', en: 'park', ar: 'الحديقة', phonetic: 'park' },
        { de: 'die Kirche', en: 'church', ar: 'الكنيسة', phonetic: 'keer-khe' },
        { de: 'das Zentrum', en: 'center', ar: 'المركز/الوسط', phonetic: 'tsen-troom' },
        { de: 'weit', en: 'far', ar: 'بعيد', phonetic: 'vite' }
      ],
      grammar: "Local Prepositions with 'sein':\n- Wo ist das Museum?\n- Es ist NEBEN der Bank. (Dative)\n- Es ist GEGENÜBER vom Bahnhof. (Opposite the station)",
      examples: [
        { de: "Ist das Museum weit von hier?", en: "Is the museum far from here?", ar: "هل المتحف بعيد عن هنا؟" },
        { de: "Die Kirche ist im Zentrum.", en: "The church is in the center.", ar: "الكنيسة في المركز." },
        { de: "Hinter dem Haus ist ein Park.", en: "Behind the house is a park.", ar: "خلف المنزل توجد حديقة." }
      ],
      speaking: {
        dialogue: "A: Entschuldigung, wo ist die Post?\nB: Gehen Sie geradeaus und dann links.\nA: Ist es weit?\nB: Nein, nur fünf Minuten zu Fuß.",
        roleplay: "You are a tourist. Ask for directions to the main square and the nearest pharmacy."
      },
      listening: {
        script: "Unsere Stadt hat ein großes Theater und viele schöne Parks. Im Zentrum gibt es auch eine alte Kirche."
      },
      reading: {
        text: "Berlin ist die Hauptstadt von Deutschland. Es gibt dort viele Museen und Sehenswürdigkeiten wie das Brandenburger Tor.",
        questions: [
          { q: "Was ist Berlin?", options: ["Dorf", "Hauptstadt", "Land"], correct: "Hauptstadt" },
          { q: "Was gibt es dort viele?", options: ["Museen", "Wälder", "Seen"], correct: "Museen" }
        ]
      },
      writing: {
        prompt: "List 4 places in your city and their articles.",
        sample: "Das Kino, die Bank, der Supermarkt, das Restaurant."
      },
      pronunciation: "The 'z' in 'Zentrum' is 'ts'. The 'ch' in 'Kirche' is soft like in 'ich'.",
      quiz: [
        { question: "Where is the park?", options: ["Wie ist der Park?", "Wo ist der Park?", "Wer ist der Park?"], correctAnswer: "Wo ist der Park?", type: "mcq" },
        { question: "Opposite = ___.", options: ["neben", "hinter", "gegenüber"], correctAnswer: "gegenüber", type: "mcq" },
        { question: "The city = ___ Stadt.", options: ["der", "die", "das"], correctAnswer: "die", type: "mcq" }
      ],
      culture: "Most German cities have a 'Marktplatz' (market square) in the center with a 'Rathaus' (town hall)."
    },
    {
      level: 'A1',
      unit: 'School Subjects',
      vocabulary: [
        { de: 'die Schule', en: 'school', ar: 'المدرسة', phonetic: 'shoo-le' },
        { de: 'Mathematik', en: 'math', ar: 'الرياضيات', phonetic: 'ma-te-ma-teek' },
        { de: 'Deutsch', en: 'German', ar: 'الألمانية', phonetic: 'doytsh' },
        { de: 'lernen', en: 'to learn/study', ar: 'يتعلم/يدرس', phonetic: 'ler-nen' },
        { de: 'die Hausaufgabe', en: 'homework', ar: 'الواجب المنزلي', phonetic: 'hows-owf-gah-be' },
        { de: 'schreiben', en: 'to write', ar: 'يكتب', phonetic: 'shrye-ben' }
      ],
      grammar: "Sentence Structure (Verb Position): In a main clause, the conjugated verb is always the SECOND element.\n- Ich lerne heute Deutsch. (I learn German today.)\n- Heute lerne ich Deutsch. (Today I learn German.)",
      examples: [
        { de: "Was lernst du in der Schule?", en: "What do you learn in school?", ar: "ماذا تتعلم في المدرسة؟" },
        { de: "Ich mag Mathematik nicht.", en: "I don't like math.", ar: "أنا لا أحب الرياضيات." },
        { de: "Hast du deine Hausaufgaben gemacht?", en: "Did you do your homework?", ar: "هل قمت بواجبك المنزلي؟" }
      ],
      speaking: {
        dialogue: "A: Was ist dein Lieblingsfach?\nB: Ich mag Geschichte und Kunst.\nA: Und wie findest du Deutsch?\nB: Es ist schwierig, aber interessant.",
        roleplay: "Talk to a classmate about your schedule and which subjects you find easy or hard."
      },
      listening: {
        script: "Morgen haben wir einen Test in Biologie. Ich muss heute viel lernen und darf nicht fernsehen."
      },
      reading: {
        text: "In Deutschland gehen Kinder ab sechs Jahren in die Schule. Zuerst gehen sie vier Jahre in die Grundschule.",
        questions: [
          { q: "Wann gehen Kinder in die Schule?", options: ["4 Jahre", "6 Jahre", "10 Jahre"], correct: "6 Jahre" },
          { q: "Wie heißt die erste Schule?", options: ["Hochschule", "Grundschule", "Gymnasium"], correct: "Grundschule" }
        ]
      },
      writing: {
        prompt: "Write about your favorite subject and why you like it.",
        sample: "Mein Lieblingsfach ist Sport. Ich bewege mich gern. Wir spielen oft Fußball."
      },
      pronunciation: "The 'eu' in 'Deutsch' sounds like 'oy'. The 'sch' is a simple 'sh'.",
      quiz: [
        { question: "I learn German = Ich ___ Deutsch.", options: ["lerne", "lernst", "lernen"], correctAnswer: "lerne", type: "mcq" },
        { question: "What is 'homework'?", options: ["die Arbeit", "die Hausaufgabe", "die Schule"], correctAnswer: "die Hausaufgabe", type: "mcq" },
        { question: "Verb position in 'Heute ___ ich Deutsch'?", options: ["lerne", "lerne (at end)", "lernst"], correctAnswer: "lerne", type: "mcq" }
      ],
      culture: "School grades in Germany go from 1 (excellent) to 6 (fail). A '1' is the best you can get!"
    },
    {
      level: 'A1',
      unit: 'Grocery Shopping',
      vocabulary: [
        { de: 'das Kilo', en: 'kilogram', ar: 'كيلوغرام', phonetic: 'kee-loh' },
        { de: 'die Flasche', en: 'bottle', ar: 'زجاجة', phonetic: 'fla-she' },
        { de: 'der Käse', en: 'cheese', ar: 'الجبن', phonetic: 'kay-ze' },
        { de: 'das Obst', en: 'fruit', ar: 'الفاكهة', phonetic: 'ohpst' },
        { de: 'das Gemüse', en: 'vegetables', ar: 'الخضروات', phonetic: 'ge-mue-ze' },
        { de: 'kosten', en: 'to cost', ar: 'يكلف', phonetic: 'kos-ten' }
      ],
      grammar: "Plural forms for measurements: Nouns for weights and measures usually stay in the singular after a number.\n- Ein Kilo Äpfel\n- Zwei Kilo Äpfel (NOT Kilos)\n- Drei Liter Milch",
      examples: [
        { de: "Ich hätte gern ein Kilo Tomaten.", en: "I would like a kilo of tomatoes.", ar: "أود كيلوغراماً من الطماطم." },
        { de: "Wie viel kostet eine Flasche Wasser?", en: "How much does a bottle of water cost?", ar: "كم تكلف زجاجة الماء؟" },
        { de: "Haben Sie frischen Käse?", en: "Do you have fresh cheese?", ar: "هل لديك جبن طازج؟" }
      ],
      speaking: {
        dialogue: "A: Guten Tag, was kann ich für Sie tun?\nB: Ich brauche zwei Kilo Bananen und ein Pfund Butter.\nA: Sonst noch etwas?\nB: Nein danke, das ist alles.",
        roleplay: "You are at a local market. Buy fruit and vegetables for a salad."
      },
      listening: {
        script: "Die Tomaten sind heute im Angebot. Ein Kilo kostet nur ein Euro fünfzig. Greifen Sie zu!"
      },
      reading: {
        text: "Auf dem Markt kauft Frau Schmidt frisches Gemüse. Sie kauft Kartoffeln, Zwiebeln und Salat. Sie kauft auch ein Kilo Orangen.",
        questions: [
          { q: "Was kauft Frau Schmidt?", options: ["Fleisch", "Gemüse", "Brot"], correct: "Gemüse" },
          { q: "Wie viele Orangen kauft sie?", options: ["ein Kilo", "zwei Kilo", "fünf Kilo"], correct: "ein Kilo" }
        ]
      },
      writing: {
        prompt: "Write a short shopping list with quantities (e.g., 2 bottles, 1 kilo).",
        sample: "3 Flaschen Cola, 1 Kilo Äpfel, 500g Fleisch, 1 Liter Milch."
      },
      pronunciation: "The 'g' at the end of 'billig' or 'König' sounds like a soft 'ch' in Northern Germany, but more like 'k' in the South.",
      quiz: [
        { question: "One kilo of apples = ein ___ Äpfel.", options: ["Kilo", "Kilos", "Kilogramm"], correctAnswer: "Kilo", type: "mcq" },
        { question: "What is 'bottle'?", options: ["die Flasche", "das Glas", "die Dose"], correctAnswer: "die Flasche", type: "mcq" },
        { question: "How much costs... = Wie viel ___...?", options: ["kostet", "kosten", "koste"], correctAnswer: "kostet", type: "mcq" }
      ],
      culture: "Organic food ('Bio') is very popular in Germany. You will find 'Bio' sections in almost every supermarket."
    },
    {
      level: 'A1',
      unit: 'Animals & Pets',
      vocabulary: [
        { de: 'der Hund', en: 'dog', ar: 'الكلب', phonetic: 'hoont' },
        { de: 'die Katze', en: 'cat', ar: 'القطة', phonetic: 'kat-tse' },
        { de: 'das Pferd', en: 'horse', ar: 'الحصان', phonetic: 'pfayrt' },
        { de: 'der Vogel', en: 'bird', ar: 'الطائر', phonetic: 'foh-gel' },
        { de: 'süß', en: 'sweet/cute', ar: 'لطيف/حلو', phonetic: 'zuess' },
        { de: 'gefährlich', en: 'dangerous', ar: 'خطير', phonetic: 'ge-fayr-likh' }
      ],
      grammar: "Negation with 'nicht' vs 'kein':\n- Use 'KEIN' for nouns with indefinite or no article: Ich habe KEINEN Hund.\n- Use 'NICHT' for verbs, adjectives, or nouns with definite articles: Der Hund ist NICHT gefährlich.",
      examples: [
        { de: "Ich habe eine Katze.", en: "I have a cat.", ar: "لدي قطة." },
        { de: "Mein Hund ist sehr süß.", en: "My dog is very cute.", ar: "كلبي لطيف جداً." },
        { de: "Vögel können fliegen.", en: "Birds can fly.", ar: "الطيور يمكنها الطيران." }
      ],
      speaking: {
        dialogue: "A: Hast du ein Haustier?\nB: Ja, ich habe einen kleinen Hund.\nA: Wie heißt er?\nB: Er heißt Bello und er ist drei Jahre alt.",
        roleplay: "Describe your favorite animal (what it looks like, what it eats, if it's a pet)."
      },
      listening: {
        script: "Im Zoo gibt es viele Tiere. Da sind Löwen, Tiger und Elefanten. Die Kinder finden die Affen am lustigsten."
      },
      reading: {
        text: "Katzen sind sehr beliebte Haustiere in Deutschland. Sie sind sauber und oft ruhig. Hunde brauchen viel Auslauf und müssen draußen spazieren gehen.",
        questions: [
          { q: "Was sind beliebte Haustiere?", options: ["Tiger", "Katzen", "Schlangen"], correct: "Katzen" },
          { q: "Was brauchen Hunde?", options: ["Auslauf", "Milch", "Schlaf"], correct: "Auslauf" }
        ]
      },
      writing: {
        prompt: "Write 3 sentences about an animal you like or dislike.",
        sample: "Ich mag Pferde. Sie sind groß und schön. Ich reite gern am Wochenende."
      },
      pronunciation: "The 'z' in 'Katze' is 'ts'. The 'v' in 'Vogel' is 'f'.",
      quiz: [
        { question: "I have no dog = Ich habe ___ Hund (der).", options: ["kein", "keine", "keinen"], correctAnswer: "keinen", type: "mcq" },
        { question: "What is 'bird'?", options: ["der Vogel", "der Hund", "das Pferd"], correctAnswer: "der Vogel", type: "mcq" },
        { question: "The cat is not dangerous = Die Katze ist ___ gefährlich.", options: ["nicht", "kein", "keine"], correctAnswer: "nicht", type: "mcq" }
      ],
      culture: "Germany is a very dog-friendly country. You can often take your dog into cafes, restaurants, and even some shops."
    },
    {
      level: 'A1',
      unit: 'Travel Destinations',
      vocabulary: [
        { de: 'der Urlaub', en: 'vacation', ar: 'العطلة', phonetic: 'oor-lowp' },
        { de: 'das Meer', en: 'sea', ar: 'البحر', phonetic: 'mare' },
        { de: 'die Berge', en: 'mountains', ar: 'الجبال', phonetic: 'ber-ge' },
        { de: 'besuchen', en: 'to visit', ar: 'يزور', phonetic: 'be-zoo-khen' },
        { de: 'das Hotel', en: 'hotel', ar: 'الفندق', phonetic: 'ho-tel' },
        { de: 'reservieren', en: 'to reserve', ar: 'يحجز', phonetic: 'ray-zer-vee-ren' }
      ],
      grammar: "Prepositions for Travel:\n- NACH + Cities/Countries: Ich fliege NACH Berlin.\n- AN DAS (ans) Meer: Wir fahren ANS Meer.\n- IN DIE Berge: Wir fahren IN DIE Berge.",
      examples: [
        { de: "Ich mache im Sommer Urlaub.", en: "I'm going on vacation in summer.", ar: "سأذهب in عطلة في الصيف." },
        { de: "Wir fahren ans Meer nach Spanien.", en: "We are going to the sea in Spain.", ar: "نحن ذاهبون إلى البحر في إسبانيا." },
        { de: "Ich möchte ein Zimmer reservieren.", en: "I would like to reserve a room.", ar: "أود حجز غرفة." }
      ],
      speaking: {
        dialogue: "A: Wohin fährst du im Urlaub?\nB: Ich fahre in die Berge nach Österreich.\nA: Schön! Gehst du dort wandern?\nB: Ja, ich liebe die Natur.",
        roleplay: "Plan a trip with a friend. Decide between the beach or the mountains."
      },
      listening: {
        script: "Mein letzter Urlaub war in Italien. Das Essen war super und das Meer war sehr warm. Ich möchte nächstes Jahr wieder hin."
      },
      reading: {
        text: "Viele Deutsche machen gern Urlaub in Deutschland. Beliebte Ziele sind die Ostsee oder die Alpen im Süden. Man kann dort gut entspannen.",
        questions: [
          { q: "Wo machen viele Deutsche Urlaub?", options: ["USA", "Deutschland", "China"], correct: "Deutschland" },
          { q: "Was ist ein Ziel im Süden?", options: ["Ostsee", "Alpen", "Berlin"], correct: "Alpen" }
        ]
      },
      writing: {
        prompt: "Where do you want to go on your next vacation? Write 3 sentences.",
        sample: "Ich möchte nach Japan fliegen. Ich will Tokio besuchen. Ich mag die Kultur dort."
      },
      pronunciation: "The 'v' in 'reservieren' is an English 'v'. The 'v' in 'viel' is an 'f'.",
      quiz: [
        { question: "I go to Berlin = Ich fahre ___ Berlin.", options: ["nach", "an", "in"], correctAnswer: "nach", type: "mcq" },
        { question: "I go to the sea = Ich fahre ___ Meer.", options: ["ans", "ins", "nach"], correctAnswer: "ans", type: "mcq" },
        { question: "What is 'vacation'?", options: ["der Urlaub", "die Arbeit", "der Weg"], correctAnswer: "der Urlaub", type: "mcq" }
      ],
      culture: "Germany is the world champion of travel ('Reiseweltmeister'). Germans love to travel abroad, especially to the Mediterranean."
    },
    {
      level: 'A1',
      unit: 'The Office',
      vocabulary: [
        { de: 'der Computer', en: 'computer', ar: 'الكمبيوتر', phonetic: 'kom-pyoo-ter' },
        { de: 'drucken', en: 'to print', ar: 'يطبع', phonetic: 'droo-ken' },
        { de: 'das Meeting', en: 'meeting', ar: 'الاجتماع', phonetic: 'mee-ting' },
        { de: 'müssen', en: 'to have to', ar: 'يجب أن', phonetic: 'mues-sen' },
        { de: 'die E-Mail', en: 'e-mail', ar: 'البريد الإلكتروني', phonetic: 'ee-mail' },
        { de: 'der Chef', en: 'boss', ar: 'المدير', phonetic: 'shef' }
      ],
      grammar: "Modal Verb 'müssen' (must/have to):\n- Ich muss (I must)\n- Du musst (You must)\n- Er/Sie/Es muss (He/She must)\n- Wir müssen (We must)\nThe second verb always goes to the end in the infinitive.",
      examples: [
        { de: "Ich muss heute viel arbeiten.", en: "I have to work a lot today.", ar: "يجب علي العمل كثيراً اليوم." },
        { de: "Musst du den Bericht drucken?", en: "Do you have to print the report?", ar: "هل يجب عليك طبع التقرير؟" },
        { de: "Wir müssen um 9 Uhr im Büro sein.", en: "We have to be in the office at 9 AM.", ar: "يجب أن نكون في المكتب في الساعة التاسعة." }
      ],
      speaking: {
        dialogue: "A: Wo ist der Chef?\nB: Er ist im Meeting.\nA: Oh, ich muss ihm eine E-Mail schreiben.\nB: Kannst du das Meeting abwarten?",
        roleplay: "Ask a colleague for help with the printer because you must finish a document."
      },
      listening: {
        script: "Mein Computer ist kaputt. Ich kann keine E-Mails lesen. Ich muss jetzt den Techniker anrufen."
      },
      reading: {
        text: "Im Büro von Herr Meyer ist es sehr modern. Er hat einen neuen Laptop und einen schnellen Drucker. Er schreibt jeden Tag viele E-Mails an seine Kunden.",
        questions: [
          { q: "Was hat Herr Meyer neu?", options: ["Auto", "Laptop", "Handy"], correct: "Laptop" },
          { q: "An wen schreibt er E-Mails?", options: ["Freunde", "Kunden", "Familie"], correct: "Kunden" }
        ]
      },
      writing: {
        prompt: "Write 3 things you must do at work or school.",
        sample: "Ich muss Hausaufgaben machen. Ich muss Deutsch lernen. Ich muss pünktlich sein."
      },
      pronunciation: "The 'ch' in 'Chef' is pronounced like 'sh' in English. The 'ü' in 'müssen' is rounded.",
      quiz: [
        { question: "I must = Ich ___.", options: ["muss", "mussst", "müssen"], correctAnswer: "muss", type: "mcq" },
        { question: "What is 'printer'?", options: ["der Drucker", "der Computer", "der Stift"], correctAnswer: "der Drucker", type: "mcq" },
        { question: "We have to go = Wir ___ gehen.", options: ["müssen", "muss", "musst"], correctAnswer: "müssen", type: "mcq" }
      ],
      culture: "German offices are often quiet. It is important to knock before entering a room if the door is closed."
    },
    {
      level: 'A1',
      unit: 'At the Hotel',
      vocabulary: [
        { de: 'der Schlüssel', en: 'key', ar: 'المفتاح', phonetic: 'shlues-sel' },
        { de: 'die Rezeption', en: 'reception', ar: 'الاستقبال', phonetic: 'ray-tsep-tsyon' },
        { de: 'das Frühstück', en: 'breakfast', ar: 'الإفطار', phonetic: 'frue-shtuek' },
        { de: 'der Aufzug', en: 'elevator/lift', ar: 'المصعد', phonetic: 'owf-tsook' },
        { de: 'wollen', en: 'to want', ar: 'يريد', phonetic: 'vol-len' },
        { de: 'das WLAN', en: 'WiFi', ar: 'الواي فاي', phonetic: 'vay-lahn' }
      ],
      grammar: "Modal Verb 'wollen' (to want):\n- Ich will (I want)\n- Du willst (You want)\n- Er/Sie/Es will (He/She wants)\n- Wir wollen (We want)\nUse 'ich will' for strong intent, 'ich möchte' for polite requests.",
      examples: [
        { de: "Ich will ein Zimmer mit Balkon.", en: "I want a room with a balcony.", ar: "أريد غرفة مع شرفة." },
        { de: "Wann gibt es Frühstück?", en: "When is breakfast served?", ar: "متى يوجد إفطار؟" },
        { de: "Wo ist der Aufzug?", en: "Where is the elevator?", ar: "أين المصعد؟" }
      ],
      speaking: {
        dialogue: "A: Guten Tag, ich habe eine Reservierung.\nB: Ihr Name, bitte?\nA: Müller. Ich will bis Freitag bleiben.\nB: Hier ist Ihr Schlüssel. Zimmer 204.",
        roleplay: "Check into a hotel. Ask for the WiFi password and the breakfast times."
      },
      listening: {
        script: "Willkommen im Hotel Stern. Ihr Zimmer ist im dritten Stock. Sie können den Aufzug nehmen. Das Frühstück ist ab sieben Uhr."
      },
      reading: {
        text: "Das Hotel 'Adler' ist sehr groß. Es hat 100 Zimmer and ein Restaurant. Alle Zimmer haben WLAN und eine Minibar. Der Aufzug ist neben der Rezeption.",
        questions: [
          { q: "Wie viele Zimmer hat das Hotel?", options: ["50", "100", "200"], correct: "100" },
          { q: "Wo ist der Aufzug?", options: ["im Garten", "neben der Rezeption", "im Keller"], correct: "neben der Rezeption" }
        ]
      },
      writing: {
        prompt: "Write a short message to the hotel: You want to arrive at 10 PM.",
        sample: "Guten Tag, ich habe eine Reservierung. Ich will um 22 Uhr ankommen. Ist das okay? Danke."
      },
      pronunciation: "The 'w' in 'wollen' or 'WLAN' is pronounced like an English 'v'. The 'ü' in 'Frühstück' is rounded.",
      quiz: [
        { question: "I want = Ich ___.", options: ["will", "wollt", "wollen"], correctAnswer: "will", type: "mcq" },
        { question: "What is 'key'?", options: ["der Schlüssel", "der Aufzug", "das Bett"], correctAnswer: "der Schlüssel", type: "mcq" },
        { question: "Do you want to stay? = ___ du bleiben?", options: ["Willst", "Wollt", "Wollen"], correctAnswer: "Willst", type: "mcq" }
      ],
      culture: "In Germany, 'Frühstück' is often a large meal with bread, cheese, cold meats, and coffee. It's usually included in hotel stays."
    },
    {
      level: 'A1',
      unit: 'Festivals & Birthdays',
      vocabulary: [
        { de: 'das Geschenk', en: 'gift', ar: 'الهدية', phonetic: 'ge-shenk' },
        { de: 'die Party', en: 'party', ar: 'الحفلة', phonetic: 'par-tee' },
        { de: 'die Torte', en: 'cake', ar: 'الكعكة', phonetic: 'tor-te' },
        { de: 'feiern', en: 'to celebrate', ar: 'يحتفل', phonetic: 'fy-ern' },
        { de: 'die Einladung', en: 'invitation', ar: 'الدعوة', phonetic: 'ein-lah-doong' },
        { de: 'Herzlichen Glückwunsch', en: 'Happy Birthday/Congrats', ar: 'تهانينا الحارة', phonetic: 'herts-li-khen' }
      ],
      grammar: "Ordinal Numbers (1st to 31st): Used for dates. Add '-te' up to 19, and '-ste' from 20 onwards.\n- der erste (1st)\n- der dritte (3rd - irregular)\n- der zwanzigste (20th)\nExample: 'Heute ist der erste Mai.'",
      examples: [
        { de: "Wann hast du Geburtstag?", en: "When is your birthday?", ar: "متى عيد ميلادك؟" },
        { de: "Ich habe am zehnten August Geburtstag.", en: "My birthday is on August 10th.", ar: "عيد ميلادي في العاشر من أغسطس." },
        { de: "Danke für die Einladung!", en: "Thanks for the invitation!", ar: "شكراً على الدعوة!" }
      ],
      speaking: {
        dialogue: "A: Alles Gute zum Geburtstag!\nB: Danke schön! Kommst du heute Abend zu meiner Party?\nA: Ja, gerne. Soll ich etwas mitbringen?\nB: Nein, ich habe genug Torte.",
        roleplay: "Invite a friend to your birthday party and tell them when and where it is."
      },
      listening: {
        script: "Morgen feiere ich meinen Geburtstag. Ich werde dreißig Jahre alt. Ich habe alle meine Freunde eingeladen."
      },
      reading: {
        text: "In Deutschland feiert man viele Feste. Weihnachten ist im Dezember. Ostern ist im Frühling. Zum Geburtstag gibt es oft Geschenke und eine Torte mit Kerzen.",
        questions: [
          { q: "Wann ist Weihnachten?", options: ["März", "August", "Dezember"], correct: "Dezember" },
          { q: "Was gibt es zum Geburtstag?", options: ["Schnee", "Geschenke", "Schule"], correct: "Geschenke" }
        ]
      },
      writing: {
        prompt: "Write a short invitation: My party is on Saturday at 8 PM.",
        sample: "Hallo! Ich habe am Samstag eine Party. Sie fängt um 20 Uhr an. Kommst du? Viele Grüße."
      },
      pronunciation: "The 'ch' in 'Glückwunsch' is soft. The 'ei' in 'feiern' sounds like 'eye'.",
      quiz: [
        { question: "Happy Birthday = Herzlichen ___.", options: ["Glückwunsch", "Einladung", "Geschenk"], correctAnswer: "Glückwunsch", type: "mcq" },
        { question: "Today is the 1st = Heute ist der ___.", options: ["eins", "einste", "erste"], correctAnswer: "erste", type: "mcq" },
        { question: "What is 'invitation'?", options: ["die Einladung", "die Torte", "das Fest"], correctAnswer: "die Einladung", type: "mcq" }
      ],
      culture: "Never congratulate someone on their birthday *before* the actual day in Germany! It is considered bad luck ('Unglück')."
    },
    {
      level: 'A1',
      unit: 'Sports & Fitness',
      vocabulary: [
        { de: 'der Fußball', en: 'football/soccer', ar: 'كرة القدم', phonetic: 'foos-bal' },
        { de: 'das Tennis', en: 'tennis', ar: 'التنس', phonetic: 'ten-nis' },
        { de: 'das Yoga', en: 'yoga', ar: 'اليوجا', phonetic: 'yo-ga' },
        { de: 'laufen', en: 'to run', ar: 'يجري', phonetic: 'low-fen' },
        { de: 'der Ball', en: 'ball', ar: 'الكرة', phonetic: 'bal' },
        { de: 'das Fitnessstudio', en: 'gym', ar: 'صالة الألعاب الرياضية', phonetic: 'fit-nes-shtoo-dyo' }
      ],
      grammar: "Word order with 'nicht' (Negation):\n- 'Nicht' usually comes after the verb: Ich spiele NICHT Fußball.\n- 'Nicht' comes before an adjective: Das ist NICHT teuer.\n- 'Nicht' comes at the end if negating the whole sentence.",
      examples: [
        { de: "Ich spiele gern Tennis.", en: "I like playing tennis.", ar: "أحب لعب التنس." },
        { de: "Er läuft jeden Morgen im Park.", en: "He runs every morning in the park.", ar: "هو يجري كل صباح في الحديقة." },
        { de: "Ich gehe dreimal pro Woche ins Fitnessstudio.", en: "I go to the gym three times a week.", ar: "أذهب إلى صالة الألعاب الرياضية ثلاث مرات في الأسبوع." }
      ],
      speaking: {
        dialogue: "A: Machst du Sport?\nB: Ja, ich spiele Fußball im Verein.\nA: Und wie oft trainierst du?\nB: Zweimal pro Woche, am Dienstag und Donnerstag.",
        roleplay: "Ask a partner which sports they like and how often they exercise."
      },
      listening: {
        script: "Mein Lieblingssport ist Schwimmen. Ich finde es sehr entspannend. Ich gehe am Sonntag immer ins Schwimmbad."
      },
      reading: {
        text: "Sport ist in Deutschland sehr beliebt. Der wichtigste Sport ist Fußball. Viele Kinder spielen in einem Verein. Auch Wandern und Radfahren machen viele Menschen gern.",
        questions: [
          { q: "Was ist der wichtigste Sport?", options: ["Tennis", "Fußball", "Yoga"], correct: "Fußball" },
          { q: "Wo spielen viele Kinder?", options: ["im Verein", "im Büro", "zu Hause"], correct: "im Verein" }
        ]
      },
      writing: {
        prompt: "Write 3 sentences about your favorite sport and when you do it.",
        sample: "Ich spiele gern Basketball. Ich spiele am Samstag mit Freunden. Es macht Spaß."
      },
      pronunciation: "The 'ß' in 'Fußball' is a sharp 's'. The 'st' in 'Fitnessstudio' is 'sht'.",
      quiz: [
        { question: "I don't play = Ich spiele ___.", options: ["nicht", "kein", "nein"], correctAnswer: "nicht", type: "mcq" },
        { question: "What is 'gym'?", options: ["das Fitnessstudio", "das Kino", "die Schule"], correctAnswer: "das Fitnessstudio", type: "mcq" },
        { question: "He runs = Er ___.", options: ["lauft", "läuft", "laufen"], correctAnswer: "läuft", type: "mcq" }
      ],
      culture: "Germany has a huge network of 'Sportvereine' (sports clubs). They are non-profit and a great way to meet locals."
    },
    {
      level: 'A1',
      unit: 'Electronic Media',
      vocabulary: [
        { de: 'das Handy', en: 'mobile phone', ar: 'الهاتف المحمول', phonetic: 'hen-dee' },
        { de: 'der Laptop', en: 'laptop', ar: 'اللابتوب', phonetic: 'lep-top' },
        { de: 'das Internet', en: 'internet', ar: 'الإنترنت', phonetic: 'in-ter-net' },
        { de: 'das Passwort', en: 'password', ar: 'كلمة السر', phonetic: 'pas-vort' },
        { de: 'die Website', en: 'website', ar: 'الموقع الإلكتروني', phonetic: 'vep-site' },
        { de: 'surfen', en: 'to surf (internet)', ar: 'يتصفح', phonetic: 'zoor-fen' }
      ],
      grammar: "Compound Nouns: German often combines words to make new ones. The article always follows the LAST word.\n- das Passwort (das Pass + das Wort)\n- die Haustür (das Haus + die Tür)\n- der Apfelsaft (der Apfel + der Saft)",
      examples: [
        { de: "Wie ist dein Passwort?", en: "What is your password?", ar: "ما هي كلمة السر الخاصة بك؟" },
        { de: "Ich surfe oft im Internet.", en: "I often surf the internet.", ar: "أنا أتصفح الإنترنت غالباً." },
        { de: "Mein Handy ist neu.", en: "My phone is new.", ar: "هاتفي جديد." }
      ],
      speaking: {
        dialogue: "A: Hast du WLAN?\nB: Ja, aber du brauchst ein Passwort.\nA: Wie heißt das Netzwerk?\nB: Es heißt 'Haus_Müller'.",
        roleplay: "Ask someone for their phone number and social media handle."
      },
      listening: {
        script: "Ich brauche einen neuen Laptop für die Uni. Mein alter Laptop ist zu langsam. Ich schaue heute auf einer Website nach Angeboten."
      },
      reading: {
        text: "Heutzutage benutzen fast alle Menschen ein Smartphone. Man kann damit telefonieren, Fotos machen und im Internet surfen. Viele Leute lesen auch Nachrichten online.",
        questions: [
          { q: "Was benutzen fast alle Menschen?", options: ["Radio", "Smartphone", "Zeitung"], correct: "Smartphone" },
          { q: "Was kann man damit machen?", options: ["Kochen", "im Internet surfen", "Schlafen"], correct: "im Internet surfen" }
        ]
      },
      writing: {
        prompt: "Which electronic device is most important to you? Why?",
        sample: "Mein Handy ist am wichtigsten. Ich kann Freunde anrufen und Musik hören. Es ist klein und praktisch."
      },
      pronunciation: "The 'v' in 'Passwort' or 'Website' is pronounced like an English 'v'. The 's' in 'surfen' is 'z'.",
      quiz: [
        { question: "What is 'password'?", options: ["das Passwort", "das Telefon", "die Website"], correctAnswer: "das Passwort", type: "mcq" },
        { question: "I surf the web = Ich ___ im Internet.", options: ["surfe", "lese", "schreibe"], correctAnswer: "surfe", type: "mcq" },
        { question: "The article of 'Apfelsaft'?", options: ["der", "die", "das"], correctAnswer: "der", type: "mcq" }
      ],
      culture: "Digitalization in Germany is sometimes slower than in other countries. Many people still value cash and privacy over digital solutions."
    },
    {
      level: 'A1',
      unit: 'Giving Directions',
      vocabulary: [
        { de: 'links', en: 'left', ar: 'يسار', phonetic: 'links' },
        { de: 'rechts', en: 'right', ar: 'يمين', phonetic: 'rekhts' },
        { de: 'geradeaus', en: 'straight ahead', ar: 'إلى الأمام', phonetic: 'ge-rah-de-ows' },
        { de: 'die Ecke', en: 'corner', ar: 'الزاوية', phonetic: 'ek-ke' },
        { de: 'die Ampel', en: 'traffic light', ar: 'إشارة المرور', phonetic: 'am-pel' },
        { de: 'die Kreuzung', en: 'intersection', ar: 'التقاطع', phonetic: 'kroy-tsoong' }
      ],
      grammar: "Imperative (Formal 'Sie'): Use the verb in infinitive + 'Sie'.\n- Gehen Sie geradeaus. (Go straight ahead.)\n- Biegen Sie links ab. (Turn left.)\n- Halten Sie an der Ampel. (Stop at the traffic light.)",
      examples: [
        { de: "Entschuldigung, wie komme ich zum Bahnhof?", en: "Excuse me, how do I get to the station?", ar: "معذرة، كيف أصل إلى المحطة؟" },
        { de: "Gehen Sie die erste Straße rechts.", en: "Take the first street on the right.", ar: "اسلك الشارع الأول على اليمين." },
        { de: "Das Museum ist an der Ecke.", en: "The museum is at the corner.", ar: "المتحف عند الزاوية." }
      ],
      speaking: {
        dialogue: "A: Entschuldigung, suchen Sie etwas?\nB: Ja, wo ist die Post?\nA: Gehen Sie geradeaus bis zur Ampel, dann biegen Sie links ab.\nB: Danke schön!",
        roleplay: "You are a local. Give a tourist directions from the town square to the nearest pharmacy."
      },
      listening: {
        script: "Fahren Sie immer geradeaus. An der großen Kreuzung müssen Sie rechts abbiegen. Dort finden Sie das Parkhaus."
      },
      reading: {
        text: "Um zum Park zu kommen, gehen Sie aus dem haus und biegen links ab. Gehen Sie 200 Meter geradeaus. Der Park ist gegenüber von der Schule.",
        questions: [
          { q: "Wo ist der Park?", options: ["hinter der Schule", "gegenüber von der Schule", "in der Schule"], correct: "gegenüber von der Schule" },
          { q: "Wie weit muss man gehen?", options: ["100 Meter", "200 Meter", "500 Meter"], correct: "200 Meter" }
        ]
      },
      writing: {
        prompt: "Write 3 instructions for someone to find your kitchen from your front door.",
        sample: "Gehen Sie geradeaus. Dann biegen Sie rechts ab. Die Küche ist die erste Tür links."
      },
      pronunciation: "The 'eu' in 'Kreuzung' sounds like 'oy'. The 'ch' in 'rechts' is hard.",
      quiz: [
        { question: "Straight ahead = ___.", options: ["links", "rechts", "geradeaus"], correctAnswer: "geradeaus", type: "mcq" },
        { question: "Go (formal) = ___ Sie.", options: ["Gehe", "Geht", "Gehen"], correctAnswer: "Gehen", type: "mcq" },
        { question: "What is 'traffic light'?", options: ["die Ampel", "die Ecke", "die Straße"], correctAnswer: "die Ampel", type: "mcq" }
      ],
      culture: "Germans usually give very precise directions. They might even use north/south or distance in meters rather than 'blocks'."
    },
    {
      level: 'A1',
      unit: 'In the Kitchen',
      vocabulary: [
        { de: 'der Topf', en: 'pot', ar: 'القدر', phonetic: 'topf' },
        { de: 'die Pfanne', en: 'pan', ar: 'المقلاة', phonetic: 'pfan-ne' },
        { de: 'das Messer', en: 'knife', ar: 'السكين', phonetic: 'mes-ser' },
        { de: 'die Gabel', en: 'fork', ar: 'الشوكة', phonetic: 'gah-bel' },
        { de: 'der Löffel', en: 'spoon', ar: 'الملعقة', phonetic: 'loef-fel' },
        { de: 'der Teller', en: 'plate', ar: 'الطبق', phonetic: 'tel-ler' }
      ],
      grammar: "Prepositions 'in' and 'auf':\n- 'In' is used for inside: Die Gabel ist IN der Schublade (Dative).\n- 'Auf' is used for on top of: Der Teller steht AUF dem Tisch (Dative).",
      examples: [
        { de: "Wo ist das Messer?", en: "Where is the knife?", ar: "أين السكين؟" },
        { de: "Das Messer liegt auf dem Tisch.", en: "The knife is on the table.", ar: "السكين على الطاولة." },
        { de: "Ich brauche einen großen Topf.", en: "I need a big pot.", ar: "أحتاج إلى قدر كبير." }
      ],
      speaking: {
        dialogue: "A: Schatz, wo sind die Löffel?\nB: Sie sind in der Schublade neben dem Herd.\nA: Und wo sind die Teller?\nB: Die stehen im Schrank oben.",
        roleplay: "Set the table for dinner. Ask where the cutlery and plates are."
      },
      listening: {
        script: "Ich koche heute eine Suppe. Ich brauche einen Topf, Wasser, Gemüse und ein bisschen Salz. Wo ist der Löffel?"
      },
      reading: {
        text: "In einer deutschen Küche findet man viele Geräte. Es gibt einen Herd, einen Kühlschrank und oft eine Spülmaschine. In den Schränken sind Tassen und Gläser.",
        questions: [
          { q: "Was ist im Kühlschrank?", options: ["Bücher", "Essen", "Kleidung"], correct: "Essen" },
          { q: "Was findet man im Schrank?", options: ["Tassen", "Schuhe", "Autos"], correct: "Tassen" }
        ]
      },
      writing: {
        prompt: "List 4 things you need to eat a steak.",
        sample: "Ich brauche ein Messer, eine Gabel, einen Teller und eine Serviette."
      },
      pronunciation: "The 'pf' in 'Pfanne' or 'Topf' is a single quick sound. Practice saying 'p' and 'f' together.",
      quiz: [
        { question: "What is 'spoon'?", options: ["der Löffel", "die Gabel", "das Messer"], correctAnswer: "der Löffel", type: "mcq" },
        { question: "The knife is ___ the table.", options: ["auf", "in", "an"], correctAnswer: "auf", type: "mcq" },
        { question: "What is 'pot'?", options: ["der Topf", "die Pfanne", "der Teller"], correctAnswer: "der Topf", type: "mcq" }
      ],
      culture: "Kitchens are often the heart of the home in Germany. Many people invest a lot of money in a high-quality, custom-built kitchen."
    },
    {
      level: 'A1',
      unit: 'Describing People',
      vocabulary: [
        { de: 'groß', en: 'tall/big', ar: 'كبير/طويل', phonetic: 'grohs' },
        { de: 'klein', en: 'small/short', ar: 'صغير/قصير', phonetic: 'kline' },
        { de: 'alt', en: 'old', ar: 'عجوز', phonetic: 'alt' },
        { de: 'jung', en: 'young', ar: 'شاب', phonetic: 'yoong' },
        { de: 'dick', en: 'thick/fat', ar: 'سمين', phonetic: 'dik' },
        { de: 'dünn', en: 'thin/slim', ar: 'نحيف', phonetic: 'duen' }
      ],
      grammar: "Adjectives with 'sein': Adjectives don't change endings when they follow the verb 'sein'.\n- Er ist groß. (He is tall.)\n- Sie ist klein. (She is short.)\n- Die Kinder sind jung. (The children are young.)",
      examples: [
        { de: "Mein Bruder ist sehr groß.", en: "My brother is very tall.", ar: "أخي طويل جداً." },
        { de: "Meine Oma ist achtzig Jahre alt.", en: "My grandma is eighty years old.", ar: "جدتي عمرها ثمانون عاماً." },
        { de: "Bist du müde?", en: "Are you tired?", ar: "هل أنت متعب؟" }
      ],
      speaking: {
        dialogue: "A: Wer ist der Mann dort?\nB: Das ist mein Onkel.\nA: Er sieht sehr jung aus.\nB: Ja, er ist erst dreißig.",
        roleplay: "Describe yourself or a famous person to your partner and let them guess who it is."
      },
      listening: {
        script: "Meine Schwester hat lange braune Haare und grüne Augen. Sie ist nicht sehr groß, aber sie ist sehr sportlich."
      },
      reading: {
        text: "Das ist Herr Weber. Er ist Lehrer von Beruf. Er ist groß und trägt eine Brille. Er ist sehr nett und lustig. Seine Haare sind grau.",
        questions: [
          { q: "Was trägt Herr Weber?", options: ["einen Hut", "eine Brille", "eine Tasche"], correct: "eine Brille" },
          { q: "Welche Farbe haben seine Haare?", options: ["braun", "schwarz", "grau"], correct: "grau" }
        ]
      },
      writing: {
        prompt: "Describe your best friend in 3 sentences.",
        sample: "Mein bester Freund heißt Sam. Er ist klein und dünn. Er hat schwarze Haare und ist sehr lustig."
      },
      pronunciation: "The 'ü' in 'dünn' is short. The 'j' in 'jung' is like an English 'y'.",
      quiz: [
        { question: "Opposite of 'groß'?", options: ["klein", "alt", "dick"], correctAnswer: "klein", type: "mcq" },
        { question: "He is young = Er ist ___.", options: ["jung", "alt", "groß"], correctAnswer: "jung", type: "mcq" },
        { question: "What is 'thin'?", options: ["dick", "dünn", "klein"], correctAnswer: "dünn", type: "mcq" }
      ],
      culture: "When describing people in Germany, it's polite to be factual. Avoid calling people 'dick' (fat) directly; use 'kräftig' (strong/sturdy) or 'etwas mehr auf den Rippen' as a euphemism."
    },
    {
      level: 'A1',
      unit: 'The Post Office',
      vocabulary: [
        { de: 'die Briefmarke', en: 'stamp', ar: 'طابع بريد', phonetic: 'brief-mar-ke' },
        { de: 'der Brief', en: 'letter', ar: 'رسالة', phonetic: 'brief' },
        { de: 'das Paket', en: 'package', ar: 'طرد', phonetic: 'pa-kayt' },
        { de: 'die Adresse', en: 'address', ar: 'العنوان', phonetic: 'a-dres-se' },
        { de: 'der Absender', en: 'sender', ar: 'المرسل', phonetic: 'ap-zen-der' },
        { de: 'die Postkarte', en: 'postcard', ar: 'بطاقة بريدية', phonetic: 'post-kar-te' }
      ],
      grammar: "Prepositions with Dative (Static Locations):\n- BEI der Post: At the post office.\n- AUF dem Paket: On the package.\n- AN der Wand: On the wall.\nArticles change: der/das -> dem, die -> der.",
      examples: [
        { de: "Ich brauche eine Briefmarke für diesen Brief.", en: "I need a stamp for this letter.", ar: "أحتاج إلى طابع بريد لهذه الرسالة." },
        { de: "Wo steht the Absender?", en: "Where is the sender written?", ar: "أين يكتب المرسل؟" },
        { de: "Das Paket ist sehr schwer.", en: "The package is very heavy.", ar: "الطرد ثقيل جداً." }
      ],
      speaking: {
        dialogue: "A: Guten Tag, ich möchte dieses Paket nach Ägypten schicken.\nB: Stellen Sie es bitte auf die Waage.\nA: Was kostet das?\nB: Das macht 15 Euro.",
        roleplay: "You want to send a postcard and buy three stamps. Talk to the clerk at the post office."
      },
      listening: {
        script: "Haben Sie die Adresse richtig geschrieben? Der Absender kommt oben links, der Empfänger kommt unten rechts auf den Umschlag."
      },
      reading: {
        text: "Die Post in Deutschland heißt 'Deutsche Post'. Man kann dort Briefe und Pakete abgeben. Oft gibt es auch eine Bank in der Postfiliale, die Postbank.",
        questions: [
          { q: "Wie heißt die Post in Deutschland?", options: ["German Post", "Deutsche Post", "Euro Post"], correct: "Deutsche Post" },
          { q: "Was kann man dort noch finden?", options: ["Schule", "Bank", "Zoo"], correct: "Bank" }
        ]
      },
      writing: {
        prompt: "Address a fictional letter: Name, Street, City, Country.",
        sample: "Max Mustermann, Hauptstraße 1, 12345 Berlin, Deutschland."
      },
      pronunciation: "The 'ie' in 'Brief' is a long 'eee'. The 'v' in 'Briefmarke' is silent, just a stop.",
      quiz: [
        { question: "What is 'stamp'?", options: ["die Briefmarke", "das Paket", "der Brief"], correctAnswer: "die Briefmarke", type: "mcq" },
        { question: "Sender = ___.", options: ["der Absender", "der Empfänger", "der Brief"], correctAnswer: "der Absender", type: "mcq" },
        { question: "I write a letter = Ich schreibe einen ___.", options: ["Brief", "Paket", "Stempel"], correctAnswer: "Brief", type: "mcq" }
      ],
      culture: "Yellow is the official color of the German post office. Look for yellow boxes on the street to mail your letters!"
    },
    {
      level: 'A1',
      unit: 'At the Doctor',
      vocabulary: [
        { de: 'der Termin', en: 'appointment', ar: 'الموعد', phonetic: 'ter-meen' },
        { de: 'die Schmerzen', en: 'pains/aches', ar: 'الآلام', phonetic: 'shmer-tsen' },
        { de: 'das Rezept', en: 'prescription', ar: 'الوصفة الطبية', phonetic: 'ray-tsept' },
        { de: 'die Apotheke', en: 'pharmacy', ar: 'الصيدلية', phonetic: 'a-po-tay-ke' },
        { de: 'untersuchen', en: 'to examine', ar: 'يفحص', phonetic: 'oon-ter-zoo-khen' },
        { de: 'sollen', en: 'to should/be supposed to', ar: 'ينبغي أن', phonetic: 'zol-len' }
      ],
      grammar: "Modal Verb 'sollen' (should):\n- Ich soll (I should)\n- Du sollst (You should)\n- Er/Sie/Es soll (He/She should)\n- Wir sollen (We should)\nOften used for giving advice or relaying instructions: 'Der Arzt sagt, ich soll viel trinken.'",
      examples: [
        { de: "Ich habe einen Termin um 10 Uhr.", en: "I have an appointment at 10 AM.", ar: "لدي موعد في الساعة العاشرة." },
        { de: "Wo haben Sie Schmerzen?", en: "Where do you have pain?", ar: "أين تشعر بالألم؟" },
        { de: "Du sollst die Medizin dreimal täglich nehmen.", en: "You should take the medicine three times daily.", ar: "ينبغي عليك أخذ الدواء ثلاث مرات يومياً." }
      ],
      speaking: {
        dialogue: "A: Guten Tag, ich möchte einen Termin.\nB: Geht es heute um 15 Uhr?\nA: Ja, das passt. Mein Hals tut sehr weh.\nB: Kommen Sie bitte pünktlich.",
        roleplay: "The doctor gives you advice. Respond using 'Okay, ich soll...' (e.g., drink tea, stay in bed)."
      },
      listening: {
        script: "Machen Sie bitte den Oberkörper frei. Ich möchte Sie untersuchen. Atmen Sie tief ein und wieder aus."
      },
      reading: {
        text: "In Deutschland braucht man für viele Medikamente ein Rezept vom Arzt. Mit diesem Rezept geht man in die Apotheke. Dort bekommt man die Medizin.",
        questions: [
          { q: "Was braucht man für Medikamente?", options: ["Geld", "ein Rezept", "ein Buch"], correct: "ein Rezept" },
          { q: "Wo bekommt man die Medizin?", options: ["Supermarkt", "Bäckerei", "Apotheke"], correct: "Apotheke" }
        ]
      },
      writing: {
        prompt: "Write 3 health tips using 'soll' or 'sollen'.",
        sample: "Du sollst viel Wasser trinken. Du sollst gesund essen. Du sollst Sport machen."
      },
      pronunciation: "The 'z' in 'Rezept' or 'Schmerzen' is 'ts'. The 's' in 'sollen' is a voiced 'z'.",
      quiz: [
        { question: "I should = Ich ___.", options: ["soll", "sollst", "sollen"], correctAnswer: "soll", type: "mcq" },
        { question: "What is 'appointment'?", options: ["der Termin", "das Rezept", "der Arzt"], correctAnswer: "der Termin", type: "mcq" },
        { question: "You should stay = Du ___ bleiben.", options: ["sollst", "soll", "sollen"], correctAnswer: "sollst", type: "mcq" }
      ],
      culture: "Pharmacies (Apotheken) in Germany have a big red 'A' as a sign. They are not supermarkets; you only find health products there."
    },
    {
      level: 'A1',
      unit: 'Cooking Basics',
      vocabulary: [
        { de: 'kochen', en: 'to cook', ar: 'يطبخ', phonetic: 'ko-khen' },
        { de: 'braten', en: 'to fry/roast', ar: 'يقلي/يشوي', phonetic: 'bra-ten' },
        { de: 'das Rezept', en: 'recipe', ar: 'الوصفة', phonetic: 'ray-tsept' },
        { de: 'schneiden', en: 'to cut/slice', ar: 'يقطع', phonetic: 'shny-den' },
        { de: 'rühren', en: 'to stir', ar: 'يحرك', phonetic: 'rue-ren' },
        { de: 'die Zutat', en: 'ingredient', ar: 'المكون', phonetic: 'tsoo-taht' }
      ],
      grammar: "The Imperative (Cooking Instructions):\nFor instructions, we often use the 'Sie' form for politeness or the 'du' form for friends.\n- Sie form: Kochen Sie das Wasser. (Cook/boil the water.)\n- du form: Schneide die Zwiebeln. (Cut the onions.)\nNote: 'Braten' is an irregular verb (du brätst, er brät).",
      examples: [
        { de: "Ich koche heute Abend für meine Freunde.", en: "I am cooking for my friends tonight.", ar: "أنا أطبخ لأصدقائي الليلة." },
        { de: "Braten Sie das Fleisch in der Pfanne.", en: "Fry the meat in the pan.", ar: "اقلِ اللحم في المقلاة." },
        { de: "Zuerst schneiden wir das Gemüse.", en: "First, we cut the vegetables.", ar: "أولاً، نقطع الخضروات." }
      ],
      speaking: {
        dialogue: "A: Was kochst du heute?\nB: Ich koche eine Gemüsesuppe. Hast du ein gutes Rezept?\nA: Ja, hier. Du musst zuerst die Kartoffeln schneiden.\nB: Und dann? Muss ich sie auch braten?\nA: Nein, nur im Wasser kochen.",
        roleplay: "You are teaching a friend how to make a simple salad. Use verbs like 'schneiden' and 'mischen' (mix)."
      },
      listening: {
        script: "Für ein Omelett brauchen Sie drei Eier, Salz und Pfeffer. Schlagen Sie die Eier in eine Schüssel und rühren Sie gut um. Dann braten Sie alles kurz in der Pfanne."
      },
      reading: {
        text: "Kochen ist ein Hobby für viele Menschen in Deutschland. In Kochbüchern oder im Internet findet man viele Rezepte. Wichtig sind frische Zutaten. Man schneidet das Gemüse klein, kocht es in einem Topf oder brät es in einer Pfanne.",
        questions: [
          { q: "Was ist wichtig beim Kochen?", options: ["Viel Geld", "Frische Zutaten", "Ein großer Fernseher"], correct: "Frische Zutaten" },
          { q: "Wo findet man Rezepte?", options: ["Im Zoo", "In Kochbüchern", "Im Bahnhof"], correct: "In Kochbüchern" }
        ]
      },
      writing: {
        prompt: "Write a simple list of instructions for making tea.",
        sample: "1. Koche Wasser im Wasserkocher. 2. Tue einen Teebeutel in die Tasse. 3. Gieße das Wasser in die Tasse. 4. Warte drei Minuten."
      },
      pronunciation: "The 'ch' in 'kochen' is the 'Ach-Laut' (like a throaty 'kh'). The 'r' in 'braten' is rolled slightly at the back of the throat.",
      quiz: [
        { question: "How do you say 'to cut'?", options: ["kochen", "schneiden", "braten"], correctAnswer: "schneiden", type: "mcq" },
        { question: "Braten Sie das Fleisch ___ der Pfanne.", options: ["in", "auf", "an"], correctAnswer: "in", type: "mcq" },
        { question: "___ (cook) du gern?", options: ["Kochst", "Kocht", "Kochen"], correctAnswer: "Kochst", type: "mcq" }
      ],
      culture: "Germany is famous for its 'Abendbrot' (evening bread) - a simple meal of bread, cheese, and cold meats instead of a cooked warm dinner."
    }
  ],
  'A2': [
    {
      level: 'A2',
      unit: 'My Home & Prepositions',
      vocabulary: [
        { de: 'das Zimmer', en: 'the room', ar: 'الغرفة', phonetic: 'tsim-mer' },
        { de: 'die Küche', en: 'the kitchen', ar: 'المطبخ', phonetic: 'kue-khe' },
        { de: 'auf', en: 'on top of', ar: 'على', phonetic: 'owf' },
        { de: 'unter', en: 'under', ar: 'تحت', phonetic: 'oon-ter' },
        { de: 'neben', en: 'next to', ar: 'بجانب', phonetic: 'nay-ben' },
        { de: 'das Möbel', en: 'furniture', ar: 'الأثاث', phonetic: 'moe-bel' }
      ],
      grammar: "Two-Way Prepositions (Wechselpräpositionen): These take DATIVE for location (stationary) and ACCUSATIVE for direction (movement).\n- Location: Wo? + Dativ (Das Buch liegt auf dem Tisch)\n- Direction: Wohin? + Akkusativ (Ich lege das Buch auf den Tisch)",
      examples: [
        { de: "Die Katze schläft auf dem Sofa.", en: "The cat is sleeping on the sofa (Location).", ar: "القطة تنام على الأريكة." },
        { de: "Ich hänge das Bild an die Wand.", en: "I hang the picture on the wall (Direction).", ar: "أنا أعلق الصورة على الحائط." },
        { de: "Der Stuhl steht neben dem Tisch.", en: "The chair is next to the table.", ar: "الكرسي بجانب الطاولة." }
      ],
      speaking: {
        dialogue: "A: Wo ist mein Schlüssel?\nB: Er liegt auf dem Küchentisch.\nA: Und wo ist meine Tasche?\nB: Die steht unter dem Stuhl.",
        roleplay: "Describe your bedroom. Tell someone where your bed, desk, and lamp are located."
      },
      listening: {
        script: "In meiner neuen Wohnung gibt es drei Zimmer. Die Küche ist groß und hell. Im Wohnzimmer steht ein blaues Sofa neben dem Fenster."
      },
      reading: {
        text: "Familie Weber sucht ein haus. Sie möchten einen Garten für die Kinder. Das haus soll im Erdgeschoss ein Wohnzimmer und eine Küche haben. Im ersten Stock brauchen sie drei Schlafzimmer.",
        questions: [
          { q: "Was möchte die Familie für die Kinder?", options: ["Pool", "Garten", "Garage"], correct: "Garten" },
          { q: "Wie viele Schlafzimmer brauchen sie?", options: ["eins", "zwei", "drei"], correct: "drei" }
        ]
      },
      writing: {
        prompt: "Describe your dream house in 4-5 sentences.",
        sample: "Mein Traumhaus ist am Meer. Es hat ein großes Wohnzimmer mit Blick auf das Wasser. In der Küche gibt es einen modernen Herd."
      },
      pronunciation: "The 'ü' in 'Küche' is formed by saying 'eee' but rounding your lips like you're going to whistle.",
      quiz: [
        { question: "Der Hund liegt unter ___ Tisch (der).", options: ["dem", "den", "der"], correctAnswer: "dem", type: "mcq" },
        { question: "Ich gehe in ___ Garten (der).", options: ["den", "dem", "der"], correctAnswer: "den", type: "mcq" },
        { question: "Das Buch liegt ___ Regal (das).", options: ["im", "am", "um"], correctAnswer: "im", type: "mcq" }
      ],
      culture: "Most Germans live in rented apartments. It's common to take your own kitchen furniture with you when you move!"
    },
    {
      level: 'A2',
      unit: 'Daily Routine & Reflexive Verbs',
      vocabulary: [
        { de: 'sich waschen', en: 'to wash oneself', ar: 'يغتسل', phonetic: 'zikh va-shen' },
        { de: 'sich anziehen', en: 'to get dressed', ar: 'يرتدي ملابسه', phonetic: 'zikh an-tsee-en' },
        { de: 'sich freuen', en: 'to be happy/look forward to', ar: 'يفرح', phonetic: 'zikh froy-en' },
        { de: 'sich beeilen', en: 'to hurry', ar: 'يستعجل', phonetic: 'zikh be-eye-len' },
        { de: 'sich ausruhen', en: 'to rest', ar: 'يستريح', phonetic: 'zikh ows-roo-en' },
        { de: 'sich kämmen', en: 'to comb', ar: 'يمشط شعره', phonetic: 'zikh kay-men' }
      ],
      grammar: "Reflexive Verbs (Reflexive Verben): The action refers back to the subject. The reflexive pronoun changes:\n- Ich wasche MICH\n- Du wäschst DICH\n- Er/Sie/Es wäscht SICH\n- Wir waschen UNS\n- Ihr wascht EUCH\n- Sie waschen SICH",
      examples: [
        { de: "Ich beeile mich, denn ich bin spät.", en: "I am hurrying because I am late.", ar: "أنا أستعجل لأنني متأخر." },
        { de: "Freust du dich auf den Urlaub?", en: "Are you looking forward to the vacation?", ar: "هل أنت سعيد بالعطلة؟" },
        { de: "Nach der Arbeit ruhen wir uns aus.", en: "After work, we rest.", ar: "بعد العمل، نستريح." }
      ],
      speaking: {
        dialogue: "A: Warum beeilst du dich so?\nB: Ich treffe mich um acht mit Sarah.\nA: Setz dich doch kurz hin!\nB: Nein, ich muss mich erst noch anziehen.",
        roleplay: "Tell your partner about your morning routine using at least three reflexive verbs."
      },
      listening: {
        script: "Morgens wasche ich mich zuerst. Dann ziehe ich mich an und kämme mir die Haare. Ich freue mich jeden Tag auf mein Frühstück."
      },
      reading: {
        text: "Lukas hat einen stressigen Morgen. Er muss sich beeilen, um den Bus zu bekommen. Er zieht sich schnell an und trinkt nur einen Kaffee. Abends kann er sich endlich ausruhen.",
        questions: [
          { q: "Warum beeilt sich Lukas?", options: ["Bus bekommen", "Frühstück kochen", "Sport machen"], correct: "Bus bekommen" },
          { q: "Wann ruht er sich aus?", options: ["Morgens", "Mittags", "Abends"], correct: "Abends" }
        ]
      },
      writing: {
        prompt: "Describe your daily routine from waking up to leaving the house.",
        sample: "Ich stehe um 7 Uhr auf. Ich wasche mich und ziehe mich an. Dann frühstücke ich."
      },
      pronunciation: "The 'ch' in 'mich' and 'dich' is the soft 'Ich-Laut'. Use the same position as in 'Greetings'.",
      quiz: [
        { question: "Ich freue ___.", options: ["mich", "dich", "sich"], correctAnswer: "mich", type: "mcq" },
        { question: "Wir müssen ___ beeilen.", options: ["uns", "euch", "sich"], correctAnswer: "uns", type: "mcq" },
        { question: "Wäschst du ___?", options: ["mich", "dich", "sich"], correctAnswer: "dich", type: "mcq" }
      ],
      culture: "Germans value 'Me-Time' and relaxation after work, often referred to as 'Entspannung'."
    },
    {
      level: 'A2',
      unit: 'Past Experiences (Präteritum)',
      vocabulary: [
        { de: 'war', en: 'was', ar: 'كان', phonetic: 'vahr' },
        { de: 'hatte', en: 'had', ar: 'كان لديه', phonetic: 'hat-te' },
        { de: 'früher', en: 'earlier/in the past', ar: 'سابقاً', phonetic: 'frue-er' },
        { de: 'die Kindheit', en: 'childhood', ar: 'الطفولة', phonetic: 'kint-hait' },
        { de: 'reisen', en: 'to travel', ar: 'يسافر', phonetic: 'rye-zen' },
        { de: 'besuchen', en: 'to visit', ar: 'يزور', phonetic: 'be-zoo-khen' }
      ],
      grammar: "The Simple Past (Präteritum) is mainly used for 'sein' (to be) and 'haben' (to have) in spoken German.\n- Ich war / Ich hatte\n- Du warst / Du hattest\n- Er/Sie/Es war / hatte\n- Wir waren / hatten",
      examples: [
        { de: "Früher hatte ich einen Hund.", en: "In the past I had a dog.", ar: "سابقاً كان لدي كلب." },
        { de: "Wo warst du gestern?", en: "Where were you yesterday?", ar: "أين كنت أمس؟" },
        { de: "Wir hatten viel Spaß im Urlaub.", en: "We had a lot of fun on vacation.", ar: "كان لدينا الكثير من المرح في العطلة." }
      ],
      speaking: {
        dialogue: "A: Wie war dein Wochenende?\nB: Es war sehr schön. Ich war in Berlin.\nA: Hattest du schönes Wetter?\nB: Ja, die Sonne schien die ganze Zeit.",
        roleplay: "Talk about your childhood. Mention where you were and what you had (pets, toys)."
      },
      listening: {
        script: "Als Kind war ich oft bei meinen Großeltern. Sie hatten ein großes haus mit einem Garten. Das war eine tolle Zeit."
      },
      reading: {
        text: "Letztes Jahr war Thomas in Japan. Er hatte zwei Wochen Urlaub. Die Reise war sehr teuer, aber die Menschen waren sehr nett und das Essen war fantastisch.",
        questions: [
          { q: "Wo war Thomas letztes Jahr?", options: ["China", "Japan", "USA"], correct: "Japan" },
          { q: "Wie waren die Menschen?", options: ["Nett", "Unfreundlich", "Gestresst"], correct: "Nett" }
        ]
      },
      writing: {
        prompt: "Write 3 sentences about your last weekend using 'war' and 'hatte'.",
        sample: "Gestern war ich im Kino. Ich hatte viel Popcorn. Der Film war lustig."
      },
      pronunciation: "The 'h' in 'hatte' is clearly audible. The 'r' in 'war' is a vocalic 'r'.",
      quiz: [
        { question: "Ich ___ (sein) gestern müde.", options: ["bin", "war", "warst"], correctAnswer: "war", type: "mcq" },
        { question: "Wir ___ (haben) keine Zeit.", options: ["hatten", "haben", "hatte"], correctAnswer: "hatten", type: "mcq" },
        { question: "___ du im Kino?", options: ["Warst", "War", "Waren"], correctAnswer: "Warst", type: "mcq" }
      ],
      culture: "Germans love to talk about history. The Präteritum is the standard for storytelling and written news."
    },
    {
      level: 'A2',
      unit: 'Working Life & Reasons (weil)',
      vocabulary: [
        { de: 'obwohl', en: 'although', ar: 'بالرغم من', phonetic: 'op-vohl' },
        { de: 'weil', en: 'because', ar: 'لأن', phonetic: 'vile' },
        { de: 'stressig', en: 'stressful', ar: 'مجهد', phonetic: 'stres-sikh' },
        { de: 'der Kollege', en: 'colleague', ar: 'الزميل', phonetic: 'kol-lay-ge' },
        { de: 'verdienen', en: 'to earn', ar: 'يكسب (مال)', phonetic: 'fer-dee-nen' },
        { de: 'kündigen', en: 'to quit/resign', ar: 'يستقيل', phonetic: 'kuen-di-gen' }
      ],
      grammar: "Conjunctions 'weil' and 'obwohl': Both start subordinate clauses where the verb moves to the end.\n- Ich arbeite viel, WEIL ich Geld brauche.\n- Ich arbeite viel, OBWOHL ich müde bin.",
      examples: [
        { de: "Ich mag meinen Job, obwohl er stressig ist.", en: "I like my job, although it is stressful.", ar: "أحب عملي بالرغم من أنه مجهد." },
        { de: "Er verdient viel, weil er Überstunden macht.", en: "He earns a lot because he does overtime.", ar: "هو يكسب الكثير لأنه يعمل ساعات إضافية." },
        { de: "Obwohl es regnet, gehe ich zur Arbeit.", en: "Although it's raining, I'm going to work.", ar: "بالرغم من أنها تمطر، سأذهب للعمل." }
      ],
      speaking: {
        dialogue: "A: Warum willst du kündigen?\nB: Weil der Chef unfreundlich ist.\nA: Aber du verdienst dort gut!\nB: Das stimmt, obwohl Geld nicht alles ist.",
        roleplay: "Talk about your job (or studies). Why do you like it? What is difficult? Use 'weil' and 'obwohl'."
      },
      listening: {
        script: "Ich habe tolle Kollegen, obwohl wir oft viel Stress haben. Wir helfen uns gegenseitig, weil wir ein gutes Team sind."
      },
      reading: {
        text: "Immer mehr Menschen arbeiten im Homeoffice, weil sie flexibler sein möchten. Obwohl man zu hause oft abgelenkt ist, finden viele das Arbeiten dort produktiver.",
        questions: [
          { q: "Warum arbeiten viele im Homeoffice?", options: ["Geld sparen", "Flexibilität", "Kein Büro"], correct: "Flexibilität" },
          { q: "Was ist ein Nachteil zu hause?", options: ["Kein Kaffee", "Ablenkung", "Zu leise"], correct: "Ablenkung" }
        ]
      },
      writing: {
        prompt: "Write 2 sentences about why you learn German, using 'weil' and 'obwohl'.",
        sample: "Ich lerne Deutsch, weil ich in Deutschland leben möchte. Ich lerne viel, obwohl die Grammatik schwer ist."
      },
      pronunciation: "The 'v' in 'obwohl' is a 'v'. The 'v' in 'verdienen' is an 'f'.",
      quiz: [
        { question: "Ich bleibe zu hause, ___ ich krank bin.", options: ["weil", "obwohl", "dass"], correctAnswer: "weil", type: "mcq" },
        { question: "Er lacht, ___ er traurig ist.", options: ["weil", "obwohl", "wenn"], correctAnswer: "obwohl", type: "mcq" },
        { question: "Where is the verb in 'weil' sentences?", options: ["Position 1", "Position 2", "Am Ende"], correctAnswer: "Am Ende", type: "mcq" }
      ],
      culture: "Work-life balance is a key term in Germany. Many companies offer flexible hours and 'Gleitzeit'."
    },
    {
      level: 'A2',
      unit: 'Giving Advice (sollte)',
      vocabulary: [
        { de: 'sollte', en: 'should', ar: 'ينبغي', phonetic: 'zol-te' },
        { de: 'der Rat', en: 'advice', ar: 'النصيحة', phonetic: 'raht' },
        { de: 'weniger', en: 'less', ar: 'أقل', phonetic: 'vay-ni-ger' },
        { de: 'mehr', en: 'more', ar: 'أكثر', phonetic: 'mare' },
        { de: 'rauchen', en: 'to smoke', ar: 'يدخن', phonetic: 'row-khen' },
        { de: 'treiben', en: 'to do (sport)', ar: 'يمارس', phonetic: 'trye-ben' }
      ],
      grammar: "Konjunktiv II of 'sollen' (Advice): Use 'sollte' to give polite suggestions or advice.\n- Ich sollte\n- Du solltest\n- Er/Sie/Es sollte\n- Wir sollten\nVerb position: 'Du solltest mehr Sport treiben.'",
      examples: [
        { de: "Du solltest weniger Kaffee trinken.", en: "You should drink less coffee.", ar: "ينبغي عليك شرب قهوة أقل." },
        { de: "Wir sollten öfter spazieren gehen.", en: "We should go for walks more often.", ar: "ينبغي علينا المشي أكثر." },
        { de: "Er sollte zum Arzt gehen.", en: "He should go to the doctor.", ar: "ينبغي عليه الذهاب إلى الطبيب." }
      ],
      speaking: {
        dialogue: "A: Ich habe Rückenschmerzen.\nB: Du solltest nicht so viel sitzen.\nA: Was sollte ich tun?\nB: Du solltest jeden Morgen Gymnastik machen.",
        roleplay: "Your friend wants to learn German faster. Give them 3 pieces of advice using 'solltest'."
      },
      listening: {
        script: "Wenn man gestresst ist, sollte man tief durchatmen. Man sollte auch versuchen, genug zu schlafen und gesund zu essen."
      },
      reading: {
        text: "Ein bekannter Arzt gibt Tipps für den Alltag: 'Man sollte jeden Tag mindestens zwei Liter Wasser trinken. Man sollte auch die Treppe statt den Aufzug nehmen.'",
        questions: [
          { q: "Wie viel Wasser sollte man trinken?", options: ["1 Liter", "2 Liter", "5 Liter"], correct: "2 Liter" },
          { q: "Was sollte man statt den Aufzug nehmen?", options: ["Auto", "Fahrrad", "Treppe"], correct: "Treppe" }
        ]
      },
      writing: {
        prompt: "Give advice to someone who is always tired.",
        sample: "Du solltest früher ins Bett gehen. Du solltest keinen Kaffee am Abend trinken. Du solltest zum Arzt gehen."
      },
      pronunciation: "The 'o' in 'sollte' is short and open. The 'll' is double-consonant, making the vowel short.",
      quiz: [
        { question: "Du ___ mehr Wasser trinken.", options: ["sollst", "solltest", "soll"], correctAnswer: "solltest", type: "mcq" },
        { question: "Ihr ___ nicht so viel rauchen.", options: ["solltet", "sollte", "sollen"], correctAnswer: "solltet", type: "mcq" },
        { question: "Was ___ ich machen?", options: ["sollte", "sollten", "sollst"], correctAnswer: "sollte", type: "mcq" }
      ],
      culture: "Health and wellness ('Wellness') are huge in Germany. People often share advice about herbal teas and natural remedies."
    },
    {
      level: 'A2',
      unit: 'Shopping & Comparisons',
      vocabulary: [
        { de: 'billig', en: 'cheap', ar: 'رخيص', phonetic: 'bil-likh' },
        { de: 'teuer', en: 'expensive', ar: 'غالٍ', phonetic: 'toy-er' },
        { de: 'besser', en: 'better', ar: 'أفضل', phonetic: 'bes-ser' },
        { de: 'schöner', en: 'more beautiful', ar: 'أجمل', phonetic: 'shoe-ner' },
        { de: 'am besten', en: 'the best', ar: 'الأفضل على الإطلاق', phonetic: 'am bes-ten' },
        { de: 'als', en: 'than', ar: 'من (للمقارنة)', phonetic: 'als' }
      ],
      grammar: "Comparison (Komparativ & Superlativ):\n- Positiv: schnell\n- Komparativ: schnellER als (faster than)\n- Superlativ: AM schnellSTEN (the fastest)\nIrregular: gut -> besser -> am besten / viel -> mehr -> am meisten.",
      examples: [
        { de: "Das rote Auto ist schneller als das blaue.", en: "The red car is faster than the blue one.", ar: "السيارة الحمراء أسرع من الزرقاء." },
        { de: "Dieses Handy ist am teuersten.", en: "This phone is the most expensive.", ar: "هذا الهاتف هو الأغلى." },
        { de: "Ich finde Pizza besser als Pasta.", en: "I find pizza better than pasta.", ar: "أنا أجد البيتزا أفضل من المعكرونة." }
      ],
      speaking: {
        dialogue: "A: Welcher Pullover gefällt dir besser?\nB: Der grüne ist schöner als der gelbe.\nA: Aber der gelbe ist billiger.\nB: Stimmt, aber Qualität ist am wichtigsten.",
        roleplay: "Compare two cities you know. Which is bigger? Which is more interesting?"
      },
      listening: {
        script: "Ich kaufe lieber im Supermarkt ein, weil es dort billiger ist als auf dem Markt. Aber das Obst auf dem Markt ist am frischesten."
      },
      reading: {
        text: "Berlin ist die größte Stadt in Deutschland. München ist teurer als Berlin, aber viele finden München schöner. Im Winter ist es in den Bergen am kältesten.",
        questions: [
          { q: "Welche Stadt ist teurer?", options: ["Berlin", "München", "Hamburg"], correct: "München" },
          { q: "Welche Stadt ist die größte?", options: ["Berlin", "Wien", "München"], correct: "Berlin" }
        ]
      },
      writing: {
        prompt: "Compare your current phone with your old one (3 sentences).",
        sample: "Mein neues Handy ist schneller. Das Display ist größer. Die Kamera ist am besten."
      },
      pronunciation: "The '-er' ending in 'besser' or 'schöner' is a short, open 'ah' sound.",
      quiz: [
        { question: "Gut, ___, am besten.", options: ["guter", "besser", "best"], correctAnswer: "besser", type: "mcq" },
        { question: "Berlin ist größer ___ Bonn.", options: ["als", "wie", "dann"], correctAnswer: "als", type: "mcq" },
        { question: "Superlativ of 'teuer'?", options: ["am teuersten", "am teuerstenen", "am teuerst"], correctAnswer: "am teuersten", type: "mcq" }
      ],
      culture: "Germany is known for its discount supermarkets like Aldi and Lidl, where products are often cheaper than elsewhere."
    },
    {
      level: 'A2',
      unit: 'City Life & Indirect Questions',
      vocabulary: [
        { de: 'wissen', en: 'to know (facts)', ar: 'يعرف', phonetic: 'vis-sen' },
        { de: 'erklären', en: 'to explain', ar: 'يشرح', phonetic: 'er-klay-ren' },
        { de: 'ob', en: 'whether/if', ar: 'إذا ما/لو', phonetic: 'op' },
        { de: 'die Haltestelle', en: 'stop (bus/train)', ar: 'الموقف', phonetic: 'hal-te-shtel-le' },
        { de: 'pünktlich', en: 'punctual', ar: 'دقيق في المواعيد', phonetic: 'puenkht-likh' },
        { de: 'fragen', en: 'to ask', ar: 'يسأل', phonetic: 'frah-gen' }
      ],
      grammar: "Indirect Questions: Used for politeness. The verb moves to the end.\n- Direct: Wo ist die Post?\n- Indirect: Können Sie mir sagen, WO die Post IST?\n- Yes/No Indirect: Ich möchte wissen, OB der Bus pünktlich IST.",
      examples: [
        { de: "Wissen Sie, wann der Zug abfährt?", en: "Do you know when the train departs?", ar: "هل تعرف متى يغادر القطار؟" },
        { de: "Ich möchte wissen, ob du Zeit hast.", en: "I would like to know if you have time.", ar: "أود أن أعرف ما إذا كان لديك وقت." },
        { de: "Können Sie mir erklären, wie das funktioniert?", en: "Can you explain to me how this works?", ar: "هل يمكنك أن تشرح لي كيف يعمل هذا؟" }
      ],
      speaking: {
        dialogue: "A: Entschuldigung, wissen Sie, wo die nächste Haltestelle ist?\nB: Ja, gehen Sie geradeaus. Ich weiß aber nicht, ob der Bus noch fährt.\nA: Können Sie mir sagen, wie spät es ist?\nB: Es ist halb acht.",
        roleplay: "You are a stranger in a city. Ask for directions politely using indirect questions."
      },
      listening: {
        script: "Ich frage mich, ob das Wetter am Wochenende gut wird. Weißt du, was im Wetterbericht steht?"
      },
      reading: {
        text: "Touristen fragen oft nach dem Weg. Sie möchten wissen, wo die Sehenswürdigkeiten sind. In der Information erklären Mitarbeiter, welche Museen heute offen sind.",
        questions: [
          { q: "Was möchten Touristen wissen?", options: ["Preise", "Sehenswürdigkeiten", "Namen"], correct: "Sehenswürdigkeiten" },
          { q: "Wo steht das verb in indirekten Fragen?", options: ["Am Anfang", "In der Mitte", "Am Ende"], correct: "Am Ende" }
        ]
      },
      writing: {
        prompt: "Turn these direct questions into indirect ones: 'Wo ist der Bahnhof?', 'Kommt er heute?'",
        sample: "Können Sie mir sagen, wo der Bahnhof ist? Ich möchte wissen, ob er heute kommt."
      },
      pronunciation: "The 'ö' in 'Können' and 'pünktlich' (ü) requires rounded lips. 'Wissen' has a short 'i'.",
      quiz: [
        { question: "Weißt du, wo er ___ (wohnen)?", options: ["wohnt", "wohnen", "wohne"], correctAnswer: "wohnt", type: "mcq" },
        { question: "Ich frage mich, ___ er kommt.", options: ["ob", "dass", "weil"], correctAnswer: "ob", type: "mcq" },
        { question: "Können Sie mir sagen, wie viel Uhr es ___?", options: ["ist", "sein", "bist"], correctAnswer: "ist", type: "mcq" }
      ],
      culture: "Politeness in public is important. Starting questions with 'Wissen Sie...' or 'Können Sie mir sagen...' is standard."
    },
    {
      level: 'A2',
      unit: 'Expressing Opinions (dass-Sätze)',
      vocabulary: [
        { de: 'glauben', en: 'to believe', ar: 'يعتقد', phonetic: 'glow-ben' },
        { de: 'meinen', en: 'to mean/think', ar: 'يقصد/يظن', phonetic: 'my-nen' },
        { de: 'wichtig', en: 'important', ar: 'مهم', phonetic: 'vikh-tikh' },
        { de: 'richtig', en: 'correct', ar: 'صحيح', phonetic: 'rikh-tikh' },
        { de: 'schade', en: 'a pity', ar: 'للأسف/خسارة', phonetic: 'shah-de' },
        { de: 'dass', en: 'that', ar: 'أن', phonetic: 'das' }
      ],
      grammar: "Subordinate Clauses with 'dass': The conjugated verb moves to the VERY end of the sentence.\n- Hauptsatz: Ich glaube.\n- Nebensatz: ... dass er heute kommt.\n- Gesamt: Ich glaube, dass er heute kommt.",
      examples: [
        { de: "Ich denke, dass Deutsch lernen Spaß macht.", en: "I think that learning German is fun.", ar: "أظن أن تعلم الألمانية ممتع." },
        { de: "Es ist wichtig, dass wir gesund essen.", en: "It is important that we eat healthy.", ar: "من المهم أن نأكل طعاماً صحياً." },
        { de: "Ich finde es schade, dass du gehst.", en: "I find it a pity that you are leaving.", ar: "أجد أنه من المؤسف أنك ستغادر." }
      ],
      speaking: {
        dialogue: "A: Meinst du, dass es morgen regnet?\nB: Ich hoffe, dass die Sonne scheint.\nA: Ich glaube, dass wir einen Regenschirm brauchen.\nB: Schade, dass das Wetter so schlecht ist.",
        roleplay: "Discuss your opinion about online learning. Use 'Ich finde, dass...'."
      },
      listening: {
        script: "Viele Leute sagen, dass man in der Stadt besser arbeiten kann. Ich meine aber, dass das Leben auf dem Land ruhiger ist."
      },
      reading: {
        text: "In einer Umfrage sagen 80% der Deutschen, dass Umweltschutz sehr wichtig ist. Sie meinen, dass man weniger Plastik benutzen sollte. Es ist gut, dass viele Menschen so denken.",
        questions: [
          { q: "Was finden 80% wichtig?", options: ["Sport", "Umweltschutz", "Geld"], correct: "Umweltschutz" },
          { q: "Wo steht das Verb im dass-Satz?", options: ["Am Anfang", "In der Mitte", "Am Ende"], correct: "Am Ende" }
        ]
      },
      writing: {
        prompt: "Write 3 sentences starting with: 'Ich glaube, dass...', 'Ich finde, dass...', 'Ich hoffe, dass...'",
        sample: "Ich glaube, dass ich bald gut Deutsch spreche. Ich finde, dass Berlin toll ist. Ich hoffe, dass wir uns bald sehen."
      },
      pronunciation: "Don't confuse 'das' (the/this) and 'dass' (that). They sound identical, but 'dass' always starts a new clause.",
      quiz: [
        { question: "Ich weiß, dass er ___ (kommen).", options: ["kommt", "kommen", "gekommen"], correctAnswer: "kommt", type: "mcq" },
        { question: "Es ist gut, ___ du hier bist.", options: ["das", "dass", "was"], correctAnswer: "dass", type: "mcq" },
        { question: "Ich hoffe, dass es ___ (regnen).", options: ["regnet", "regnen", "regne"], correctAnswer: "regnet", type: "mcq" }
      ],
      culture: "Directness is a trait in German culture. People often say exactly what they think using 'Ich finde, dass...'."
    },
    {
      level: 'A2',
      unit: 'Future Plans (Futur I)',
      vocabulary: [
        { de: 'werden', en: 'will / to become', ar: 'سوف / يصبح', phonetic: 'ver-den' },
        { de: 'vielleicht', en: 'maybe', ar: 'ربما', phonetic: 'fee-lyekht' },
        { de: 'bestimmt', en: 'definitely', ar: 'بالتأكيد', phonetic: 'be-shtimt' },
        { de: 'nächstes Jahr', en: 'next year', ar: 'السنة القادمة', phonetic: 'naykh-stes' },
        { de: 'die Pläne', en: 'plans', ar: 'الخطط', phonetic: 'play-ne' },
        { de: 'hoffen', en: 'to hope', ar: 'يأمل', phonetic: 'hof-fen' }
      ],
      grammar: "Future Tense (Futur I): Formed with 'werden' + Infinitive at the end.\n- Ich werde lernen.\n- Du wirst reisen.\n- Er/Sie/Es wird arbeiten.\n- Wir werden sehen.\nNote: Germans often just use Present Tense + time expression (Ich reise morgen).",
      examples: [
        { de: "Nächstes Jahr werde ich nach Deutschland reisen.", en: "Next year I will travel to Germany.", ar: "في العام القادم سأسافر إلى ألمانيا." },
        { de: "Wirst du mich besuchen?", en: "Will you visit me?", ar: "هل ستزورني؟" },
        { de: "Wir werden bestimmt viel Spaß haben.", en: "We will definitely have a lot of fun.", ar: "سيكون لدينا بالتأكيد الكثير من المرح." }
      ],
      speaking: {
        dialogue: "A: Was wirst du nach dem Kurs machen?\nB: Ich werde ein Praktikum machen.\nA: Und wirst du in Berlin bleiben?\nB: Vielleicht. Ich werde sehen, was passiert.",
        roleplay: "Tell your friend about your plans for the next 5 years (job, living, family)."
      },
      listening: {
        script: "In der Zukunft werden die Menschen weniger Auto fahren. Viele werden das Fahrrad oder den Zug benutzen."
      },
      reading: {
        text: "Wissenschaftler glauben, dass sich das Klima verändern wird. Die Sommer werden heißer werden. Wir werden neue Lösungen für die Umwelt finden müssen.",
        questions: [
          { q: "Was wird sich verändern?", options: ["Das Klima", "Die Sprache", "Das Essen"], correct: "Das Klima" },
          { q: "Wie werden die Sommer?", options: ["Kälter", "Heißer", "Länger"], correct: "Heißer" }
        ]
      },
      writing: {
        prompt: "Write 3 sentences about your plans for next summer.",
        sample: "Ich werde ans Meer fahren. Ich werde viel schwimmen. Ich werde mich ausruhen."
      },
      pronunciation: "The 'v' in 'vielleicht' is an 'f'. The 'w' in 'werden' is a 'v'.",
      quiz: [
        { question: "Ich ___ morgen arbeiten.", options: ["werde", "wirst", "wird"], correctAnswer: "werde", type: "mcq" },
        { question: "___ du kommen?", options: ["Wirst", "Wird", "Werden"], correctAnswer: "Wirst", type: "mcq" },
        { question: "Wir ___ es sehen.", options: ["werde", "wird", "werden"], correctAnswer: "werden", type: "mcq" }
      ],
      culture: "Germans plan ahead. Having a 'Kalender' and planning for the 'Zukunft' is very common."
    },
    {
      level: 'A2',
      unit: 'Social Life & Dative Verbs',
      vocabulary: [
        { de: 'helfen', en: 'to help', ar: 'يساعد', phonetic: 'hel-fen' },
        { de: 'danken', en: 'to thank', ar: 'يشكر', phonetic: 'dan-ken' },
        { de: 'gefallen', en: 'to please', ar: 'يعجب', phonetic: 'ge-fal-len' },
        { de: 'gehören', en: 'to belong to', ar: 'ينتمي إلى', phonetic: 'ge-hoe-ren' },
        { de: 'gratulieren', en: 'to congratulate', ar: 'يهنئ', phonetic: 'gra-too-lee-ren' },
        { de: 'zuhören', en: 'to listen to', ar: 'ينصت إلى', phonetic: 'tsoo-hoe-ren' }
      ],
      grammar: "Dative Verbs: Some verbs ALWAYS take the Dative case for their object.\n- Ich helfe DIR (not dich).\n- Das Kleid gefällt MIR.\n- Wir danken IHNEN.\nArticles change: der/das -> dem, die -> der.",
      examples: [
        { de: "Kannst du mir helfen?", en: "Can you help me?", ar: "هل يمكنك مساعدتي؟" },
        { de: "Das haus gehört meinem Vater.", en: "The house belongs to my father.", ar: "المنزل ينتمي لوالدي." },
        { de: "Ich gratuliere dir zum Geburtstag.", en: "I congratulate you on your birthday.", ar: "أهنئك بعيد ميلادك." }
      ],
      speaking: {
        dialogue: "A: Gefällt dir das neue Cafe?\nB: Ja, es gefällt mir sehr gut. Die Musik ist toll.\nA: Hilfst du mir morgen beim Umzug?\nB: Klar, ich helfe dir gern!",
        roleplay: "Ask a friend for help with a task and thank them properly."
      },
      listening: {
        script: "Ich möchte dir für deine Hilfe danken. Ohne dich hätte ich das nicht geschafft. Du bist ein toller Freund."
      },
      reading: {
        text: "Freundschaft ist wichtig. Freunde helfen einander in schwierigen Zeiten. Wenn man ein Problem hat, hört ein guter Freund geduldig zu und gibt Tipps.",
        questions: [
          { q: "Was machen Freunde in schwierigen Zeiten?", options: ["Weglaufen", "Helfen", "Lachen"], correct: "Helfen" },
          { q: "Was macht ein guter Freund bei Problemen?", options: ["Zuhören", "Essen", "Schlafen"], correct: "Zuhören" }
        ]
      },
      writing: {
        prompt: "Write a short 'Thank You' note to a friend using Dative verbs.",
        sample: "Lieber Paul, ich danke dir für das Geschenk. Es gefällt mir sehr. Ich gratuliere dir auch zu deinem neuen Job."
      },
      pronunciation: "The 'h' in 'gehören' and 'zuhören' is silent, it only makes the 'ö' longer.",
      quiz: [
        { question: "Ich helfe ___ (you, informal).", options: ["dich", "dir", "du"], correctAnswer: "dir", type: "mcq" },
        { question: "Das Buch gefällt ___ (me).", options: ["mich", "mir", "ich"], correctAnswer: "mir", type: "mcq" },
        { question: "Wir gratulieren ___ (him).", options: ["ihn", "ihm", "er"], correctAnswer: "ihm", type: "mcq" }
      ],
      culture: "German etiquette requires explicitly saying 'Danke' and often 'Gern geschehen' (You're welcome) when receiving help."
    },
    {
      level: 'A2',
      unit: 'Living Together & Relative Clauses',
      vocabulary: [
        { de: 'der Nachbar', en: 'neighbor', ar: 'الجار', phonetic: 'nakh-bar' },
        { de: 'die Wohngemeinschaft (WG)', en: 'shared apartment', ar: 'سكن مشترك', phonetic: 'vohn-ge-mein-shaft' },
        { de: 'der Mitbewohner', en: 'roommate', ar: 'زميل السكن', phonetic: 'mit-be-voh-ner' },
        { de: 'stören', en: 'to disturb', ar: 'يزعج', phonetic: 'stoe-ren' },
        { de: 'ordentlich', en: 'tidy/orderly', ar: 'منظم', phonetic: 'or-dent-likh' },
        { de: 'die Regel', en: 'rule', ar: 'القاعدة', phonetic: 'ray-gel' }
      ],
      grammar: "Relative Clauses: Used to describe a noun in more detail. The relative pronoun usually matches the article. Verb moves to the end.\n- Das ist der Mann, DER nebenan wohnt.\n- Das ist die Frau, DIE immer nett ist.\n- Das ist das Kind, DAS viel spielt.",
      examples: [
        { de: "Ich habe einen Nachbarn, der sehr laut ist.", en: "I have a neighbor who is very loud.", ar: "لدي جار صاخب جداً." },
        { de: "Das ist die WG, in der ich wohne.", en: "That is the shared flat I live in.", ar: "هذا هو السكن المشترك الذي أسكن فيه." },
        { de: "Mein Mitbewohner ist eine person, die sehr ordentlich ist.", en: "My roommate is a person who is very tidy.", ar: "زميلي في السكن شخص منظم جداً." }
      ],
      speaking: {
        dialogue: "A: Wie ist dein neuer Mitbewohner?\nB: Er ist ein Typ, der viel kocht und sehr nett ist.\nA: Und stört es dich, wenn er Musik hört?\nB: Nein, er ist jemand, der Rücksicht nimmt.",
        roleplay: "Describe your best friend using at least two relative clauses."
      },
      listening: {
        script: "In einer WG gibt es Regeln, die alle respektieren müssen. Zum Beispiel muss jeder den Flur putzen, wenn er dran ist."
      },
      reading: {
        text: "In Deutschland wohnen viele Studenten in einer WG. Das ist eine Wohnung, die man mit anderen teilt. Es ist billiger als allein zu wohnen, aber man braucht Mitbewohner, die sympathisch sind.",
        questions: [
          { q: "Was ist eine WG?", options: ["Büro", "Wohnung zum Teilen", "Schule"], correct: "Wohnung zum Teilen" },
          { q: "Warum wohnen Studenten dort?", options: ["Es ist billiger", "Es ist teurer", "Es ist moderner"], correct: "Es ist billiger" }
        ]
      },
      writing: {
        prompt: "Describe your ideal roommate using 'Das ist eine person, die...'",
        sample: "Das ist eine person, die ruhig ist. Das ist jemand, der gern putzt. Das ist ein Mensch, der freundlich ist."
      },
      pronunciation: "The 'st' in 'stören' sounds like 'sht'. The 'ng' in 'Wohnung' is nasal.",
      quiz: [
        { question: "Das ist der Mann, ___ dort arbeitet.", options: ["der", "die", "das"], correctAnswer: "der", type: "mcq" },
        { question: "Das ist das Buch, ___ ich lese.", options: ["der", "die", "das"], correctAnswer: "das", type: "mcq" },
        { question: "Ich kenne die Frau, ___ im Park läuft.", options: ["der", "die", "das"], correctAnswer: "die", type: "mcq" }
      ],
      culture: "WGs are extremely popular among young people and students in Germany, often leading to lifelong friendships."
    }
  ],
  'B1': [
    {
      level: 'B1',
      unit: 'Work & Future Dreams',
      vocabulary: [
        { de: 'die Karriere', en: 'career', ar: 'المسار المهني', phonetic: 'ka-ryay-re' },
        { de: 'sich bewerben', en: 'to apply', ar: 'يتقدم بطلب', phonetic: 'be-ver-ben' },
        { de: 'das Gehalt', en: 'salary', ar: 'الراتب', phonetic: 'ge-halt' },
        { de: 'die Überstunden', en: 'overtime', ar: 'ساعات إاضافية', phonetic: 'ue-ber-shtoon-den' },
        { de: 'würde', en: 'would', ar: 'سوف (للتمني)', phonetic: 'vuer-de' },
        { de: 'erreichen', en: 'to achieve', ar: 'يحقق/يصل إلى', phonetic: 'er-rye-khen' }
      ],
      grammar: "Konjunktiv II (Hypothetical): Use 'würde' + Infinitive to talk about dreams, wishes, or polite requests.\n- Ich würde gerne Weltreise machen. (I would like to go on a world trip.)\n- Würden Sie mir helfen? (Would you help me?)",
      examples: [
        { de: "Wenn ich reich wäre, würde ich nicht mehr arbeiten.", en: "If I were rich, I would no longer work.", ar: "لو كنت غنياً، لما عملت بعد الآن." },
        { de: "Ich würde gerne eine Beförderung erhalten.", en: "I would like to receive a promotion.", ar: "أود الحصول على ترقية." },
        { de: "An deiner Stelle würde ich den Chef fragen.", en: "In your place, I would ask the boss.", ar: "لو كنت مكانك، لسألت المدير." }
      ],
      speaking: {
        dialogue: "A: Was würdest du tun, wenn du im Lotto gewinnen würdest?\nB: Ich würde sofort meinen Job kündigen.\nA: Und was dann?\nB: Ich würde ein haus am Strand kaufen und nur noch lesen.",
        roleplay: "You are in a job interview. Talk about where you would like to be in 5 years."
      },
      listening: {
        script: "In der Zukunft werden viele Berufe durch Roboter ersetzt. Deshalb ist es wichtig, dass man sich ständig weiterbildet und flexibel bleibt."
      },
      reading: {
        text: "Die Arbeitswelt verändert sich rasant. Homeoffice ist für viele zum Standard geworden. Das bietet mehr Flexibilität, erfordert aber auch eine bessere Selbstorganisation, um Arbeit und Privatleben zu trennen.",
        questions: [
          { q: "Was ist für viele Standard geworden?", options: ["Büro", "Homeoffice", "Urlaub"], correct: "Homeoffice" },
          { q: "Was ist wichtig für Homeoffice?", options: ["Kaffee", "Selbstorganisation", "Auto"], correct: "Selbstorganisation" }
        ]
      },
      writing: {
        prompt: "What is your dream job? Explain why you would like to do it.",
        sample: "Mein Traumberuf ist Pilot. Ich würde gerne die Welt sehen und Verantwortung übernehmen. Es ist ein spannender Beruf."
      },
      pronunciation: "Pay attention to the suffix '-ung' (Beförderung). It's a nasal 'ng' sound, like 'singing' in English.",
      quiz: [
        { question: "Ich ___ gerne einen Kaffee trinken.", options: ["würde", "werde", "wurde"], correctAnswer: "würde", type: "mcq" },
        { question: "Was ist 'salary'?", options: ["Gehalt", "Geld", "Geschenk"], correctAnswer: "Gehalt", type: "mcq" },
        { question: "Wenn ich Zeit ___, käme ich vorbei.", options: ["hätte", "habe", "hat"], correctAnswer: "hätte", type: "mcq" }
      ],
      culture: "German CVs (Lebensläufe) usually include a professional photo and are very structured and factual."
    }
  ],
  'B2': [
    {
      level: 'B2',
      unit: 'Media & Digitalization',
      vocabulary: [
        { de: 'die Berichterstattung', en: 'news coverage', ar: 'تغطية إخبارية', phonetic: 'be-rikh-ter-shtat-oong' },
        { de: 'die Fake News', en: 'fake news', ar: 'أخبار كاذبة', phonetic: 'fake news' },
        { de: 'beeinflussen', en: 'to influence', ar: 'يؤثر على', phonetic: 'be-ein-floos-sen' },
        { de: 'die sozialen Medien', en: 'social media', ar: 'وسائل التواصل', phonetic: 'zo-tsyah-len' },
        { de: 'veröffentlichen', en: 'to publish', ar: 'ينشر', phonetic: 'fer-oef-fent-li-khen' },
        { de: 'die Glaubwürdigkeit', en: 'credibility', ar: 'المصداقية', phonetic: 'glowb-vuer-dikh-kait' }
      ],
      grammar: "Passive Voice with Modal Verbs: Formed with Modal Verb + Participle II + werden.\n- Beispiel: 'Der Text muss korrigiert werden.' (The text must be corrected.)\n- Präteritum: 'Der Text musste korrigiert werden.'",
      examples: [
        { de: "Informationen müssen heute kritisch hinterfragt werden.", en: "Information must be critically scrutinized today.", ar: "يجب التشكيك في المعلومات بشكل نقدي اليوم." },
        { de: "Das Video konnte nicht gelöscht werden.", en: "The video could not be deleted.", ar: "لم يكن من الممكن حذف الفيديو." },
        { de: "Der Artikel soll morgen veröffentlicht werden.", en: "The article is supposed to be published tomorrow.", ar: "من المفترض أن يتم نشر المقال غداً." }
      ],
      speaking: {
        dialogue: "A: Findest du, dass Zeitungen noch eine Zukunft haben?\nB: Nur wenn sie online präsenter sind.\nA: Aber im Internet wird zu viel Unsinn verbreitet.\nB: Genau, deshalb muss die Qualität gesichert werden.",
        roleplay: "Discuss with a partner whether children should have access to smartphones at an early age."
      },
      listening: {
        script: "Algorithmen bestimmen zunehmend, welche Nachrichten wir in unserem Feed sehen. Das kann zu sogenannten Filterblasen führen, in denen man nur noch die eigene Meinung bestätigt sieht."
      },
      reading: {
        text: "Journalismus steht vor großen Herausforderungen. Durch die Schnelligkeit der sozialen Medien leiden oft die Gründlichkeit und die Recherche. Dennoch bleibt die Presse als vierte Gewalt in der Demokratie unverzichtbar.",
        questions: [
          { q: "Was leidet durch die Schnelligkeit?", options: ["Recherche", "Werbung", "Papier"], correct: "Recherche" },
          { q: "Als was wird die Presse bezeichnet?", options: ["Erste Gewalt", "Vierte Gewalt", "König"], correct: "Vierte Gewalt" }
        ]
      },
      writing: {
        prompt: "Write a short comment (100 words) about the dangers of the internet.",
        sample: "Das Internet bietet zwar freien Zugang zu Wissen, birgt aber auch Risiken wie Cybermobbing und Desinformation. Es ist wichtig, Medienkompetenz zu lehren..."
      },
      pronunciation: "Master the word 'Glaubwürdigkeit'. Break it down: Glaub-wür-dig-keit. Stress is on 'Glaub'.",
      quiz: [
        { question: "Der Fehler muss ___ (finden) werden.", options: ["gefunden", "gefindet", "finden"], correctAnswer: "gefunden", type: "mcq" },
        { question: "Was ist 'credibility'?", options: ["Glaubwürdigkeit", "Glück", "Glaube"], correctAnswer: "Glaubwürdigkeit", type: "mcq" },
        { question: "Informationen ___ geprüft werden.", options: ["sollten", "wollen", "haben"], correctAnswer: "sollten", type: "mcq" }
      ],
      culture: "Germany has a public broadcasting system (ARD, ZDF) funded by a mandatory fee called 'Rundfunkbeitrag'."
    }
  ],
  'C1': [
    {
      level: 'C1',
      unit: 'Scientific Discourse',
      vocabulary: [
        { de: 'die Hypothese', en: 'hypothesis', ar: 'فرضية', phonetic: 'hy-po-tay-ze' },
        { de: 'das Verfahren', en: 'procedure/method', ar: 'إجراء/طريقة', phonetic: 'fer-fah-ren' },
        { de: 'empirisch', en: 'empirical', ar: 'تجريبي', phonetic: 'em-pee-rish' },
        { de: 'belegen', en: 'to prove/verify', ar: 'يثبت', phonetic: 'be-lay-gen' },
        { de: 'die Erkenntnis', en: 'insight/finding', ar: 'معرفة/اكتشاف', phonetic: 'er-kent-nis' },
        { de: 'kontrovers', en: 'controversial', ar: 'مثير للجدل', phonetic: 'kon-tro-vers' }
      ],
      grammar: "Konjunktiv I (Indirect Speech): Primarily used in news and academic writing to report what someone else said without guaranteeing its truth.\n- Er sagte, er gehe (instead of geht) nach hause.\n- Man behaupte, die Studie sei (instead of ist) fehlerhaft.",
      examples: [
        { de: "Der Forscher erklärte, die Ergebnisse seien eindeutig.", en: "The researcher explained that the results were clear.", ar: "أوضح الباحث أن النتائج كانت واضحة." },
        { de: "Es wird berichtet, die Regierung plane neue Gesetze.", en: "It is reported that the government is planning new laws.", ar: "يُذكر أن الحكومة تخطط لقوانين جديدة." },
        { de: "Kritiker behaupten, das Verfahren funktioniere nicht.", en: "Critics claim the procedure does not work.", ar: "يدعي النقاد أن الإجراء لا يعمل." }
      ],
      speaking: {
        dialogue: "A: Inwiefern lässt sich diese Theorie empirisch belegen?\nB: Die vorliegenden Daten stützen die Hypothese weitgehend.\nA: Dennoch gibt es Stimmen, die das Gegenteil behaupten.\nB: Solche Diskurse sind in der Wissenschaft unerlässlich.",
        roleplay: "Give a 3-minute academic statement about a topic of your choice using Konjunktiv I."
      },
      listening: {
        script: "Die kognitive Dissonanz beschreibt einen psychologisch unangenehmen Zustand, der entsteht, wenn wir zwei widersprüchliche Kognitionen gleichzeitig halten. Dies führt oft zu einer Änderung der Einstellung."
      },
      reading: {
        text: "Interdisziplinäre Zusammenarbeit gilt heute als Schlüssel zum wissenschaftlichen Erfolg. Komplexe Probleme der Gegenwart, wie der Klimawandel, lassen sich nicht mehr aus der Perspektive einer einzelnen Fachrichtung lösen.",
        questions: [
          { q: "Was gilt als Schlüssel zum Erfolg?", options: ["Zusammenarbeit", "Isolation", "Geld"], correct: "Zusammenarbeit" },
          { q: "Warum ist das so?", options: ["Komplexe Probleme", "Einfache Probleme", "Kein Grund"], correct: "Komplexe Probleme" }
        ]
      },
      writing: {
        prompt: "Write an abstract for a fictional study (200 words).",
        sample: "Die vorliegende Untersuchung befasst sich mit den Auswirkungen von... Es wurde ein experimentelles Design gewählt... Die Ergebnisse deuten darauf hin, dass..."
      },
      pronunciation: "Focus on the subtle differences between 'sei' and 'sie'. 'Sei' is the Konjunktiv form, 'sie' is the pronoun.",
      quiz: [
        { question: "Konjunktiv I: Er sagt, er ___ (haben) keine Zeit.", options: ["habe", "hat", "hätte"], correctAnswer: "habe", type: "mcq" },
        { question: "Was bedeutet 'empirisch'?", options: ["Based on experience", "Theoretical", "Fake"], correctAnswer: "Based on experience", type: "mcq" },
        { question: "Sie meinten, sie ___ (wissen) es nicht.", options: ["wüssten", "wissen", "wisset"], correctAnswer: "wisset", type: "mcq" }
      ],
      culture: "Germany is a land of ideas (Land der Ideen). Many Nobel Prize winners in physics and chemistry came from German-speaking countries."
    }
  ]
};
