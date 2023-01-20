let handler = m => m;

handler.all = async function (m) {
  let chat = global.db.data.chats[m.chat];
  let responses;
  if (/^جزار احبيك|جزار أحبيك|جزار بدي اتزوجك|جزار انتي الي|جزار اموت فيك$/i.test(m.text)) {
    responses = [
      'شكرا  ', 
      'بفكر في الامر', 
            'و انا', 
                  'خجلتني', 
                        'خلاص لا تخجلني ', 
                              'اسكتتتتت ترا اضربك عيب وش هل كلام   ', 
                                    'طيب و بعدين ' 
    ];
  } else if (/^السلام عليكم|السلام|سلام عليكم|مرحبا$/i.test(m.text)) {
    responses = [
      'وعليكم السلام', 
         'وعليكم السلام حبي متور.', 
             ' وعليكم السلام كيفك', 
                  'وعليكم السلام ورحمة الله وبركاته'
    ];
  }else if (/^يونا كيفيك|كيفك|كيفيك|كيف الأحوال|كيف حالكم$/i.test(m.text)) {
    responses = [
      'كل شيء بخير الحمد لله ', 
         ' مدري  ', 
             ' الحمد لله ماشي الحال ', 
                 'الحمد الله', 
                     ' اذا انت بخير انا بخير'
    ];
  }else if (/^كل زق|كلزق|كزق|زق$/i.test(m.text)) {
    responses = [
      'عيب ', 
         ' تأدب ', 
             ' يا وسخ ', 
                 'الله يهديك ', 
                  ' عيب يا طفل'
    ];
}else if (/^ماذا تفعل|ايش تسوي|وش تسوي|ايش قاعد تسوي$/i.test(m.text)) {
    responses = [
      'ولا شيء و انت  ', 
          'اشرب شاي تفضل  ', 
               'اتفرج تلفاز  ', 
                 'أشاهد انمي ', 
                  'اكلمك '
    ];
  }else if (/^هههه|ههههه|هههههه|ههههههه|هههههههه|ههههههههه|هههههههههه$/i.test(m.text)) {
    responses = [
      'دوم هل ضحكة ', 
           ' دايمه', 
                  'دوم يا رب  ', 
                        'ههه ', 
                        'ههههههههه', 
                        'ايش لي يضحك', 
                        'اضحك معاك؟', 
                            'دوم '
    ];
  }else if (/^صباح الخير|صباح النور|صباح الورد$/i.test(m.text)) {
    responses = [
      ' صباح الفل ', 
         '  صباح المدرسة', 
             ' صباح ولا مساء ', 
                 '  انا بنام تصبح على خير ', 
                  ' روح كمل نوم'
    ];
  }else if (/^جزار اسكت|اسكت شوي|يا ابني اسكت$/i.test(m.text)) {
    responses = [
            'ما دخلك ', 
              ' مش علي كيفك', 
                'لا يا مين انت لاتسكتني', 
                  'اسكت انت'
    ];
   } 
  if (responses) {
    let randomIndex = Math.floor(Math.random() * responses.length);
    conn.reply(m.chat, responses[randomIndex], m);
  }
  return !0
};

export default handler;
