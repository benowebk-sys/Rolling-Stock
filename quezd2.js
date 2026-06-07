const quizData2 = [
{
    id: 1,
    question: "HVAC stands for:",
    translation: "إلى ماذا يرمز الاختصار الهندسي 'HVAC'؟",
    options: [
      "A. Heat Valve Air Control | أ) التحكم في هواء صمامات الحرارة",
      "B. Heating Ventilation and Air Conditioning | ب) التدفئة، التهوية، وتكييف الهواء",
      "C. High Voltage Air Control | ج) التحكم في الهواء عالي الجهد",
      "D. Heat Variation Air Cooling | د) تبريد الهواء متباين الحرارة"
    ],
    answer: "B. Heating Ventilation and Air Conditioning | ب) التدفئة، التهوية، وتكييف الهواء",
    hintEN: "HVAC is the sub-discipline of mechanical engineering that focuses on environmental comfort in buildings and vehicles.",
    hintAR: "هو الاختصار العالمي الشامل لأنظمة التحكم البيئي والحراري في المنشآت ووسائل النقل لضمان راحة الأفراد."
  },
  {
    id: 2,
    question: "The main purpose of HVAC systems in railway coaches is to:",
    translation: "الهدف الأساسي والرئيسي من وجود أنظمة الـ HVAC داخل عربات القطار هو:",
    options: [
      "A. Increase train speed | أ) زيادة سرعة مسير القطار",
      "B. Maintain comfortable temperature and air quality | ب) الحفاظ على درجة حرارة مريحة وجاذبية جودة الهواء للركاب",
      "C. Reduce train weight | ج) تخفيف وزيادة خفة وزن القطار",
      "D. Control train brakes | د) التحكم في فرامل وأجهزة توقف القطار"
    ],
    answer: "B. Maintain comfortable temperature and air quality | ب) الحفاظ على درجة حرارة مريحة وجاذبية جودة الهواء للركاب",
    hintEN: "Railway HVAC units continuously regulate temperature, manage humidity, and filter outdoor air for passenger safety and comfort.",
    hintAR: "تتحكم الوحدات في تبريد أو تدفئة مقصورة الركاب وتجديد الأكسجين مع تنقية الهواء من أتربة السكة الحديد."
  },
  {
    id: 3,
    question: "Which component compresses refrigerant gas in the HVAC system?",
    translation: "أي المكونات التالية يقوم بضغط غاز فريون التبريد ورفع حرارته في نظام الـ HVAC؟",
    options: [
      "A. Evaporator | أ) المبخّر (الافابوريتور)",
      "B. Compressor | ب) الضاغط (الكومبريسور)",
      "C. Condenser | ج) المكثّف (الكوندنسر)",
      "D. Air filter | د) فلتر الهواء"
    ],
    answer: "B. Compressor | ب) الضاغط (الكومبريسور)",
    hintEN: "The compressor acts as the mechanical pump or heart of the refrigeration cycle, driving refrigerant through the loops.",
    hintAR: "الكومبريسور هو قلب دورة التبريد ميكانيكياً؛ حيث يسحب غاز الفريون بضغط منخفض ويضغطه ليتحول لضغط وعزل عالٍ."
  },
  {
    id: 4,
    question: "Which component releases heat to the outside air?",
    translation: "أي المكونات التالية مسؤول عن طرد وتصريف الحرارة الممتصة إلى الهواء الخارجي؟",
    options: [
      "A. Condenser coil | أ) ملف المكثّف (Condenser Coil)",
      "B. Evaporator coil | ب) ملف المبخّر (Evaporator Coil)",
      "C. Air filter | ج) فلتر وتنقية الهواء",
      "D. Blower fan | د) مروحة الدفع (البلاور)"
    ],
    answer: "A. Condenser coil | أ) ملف المكثّف (Condenser Coil)",
    hintEN: "The condenser coil sheds heat extracted from inside the coach, converting high-pressure gas back into a liquid state.",
    hintAR: "يمر الفريون الساخن داخل ملف المكثف الخارجي، وتقوم المراوح بطرد الحرارة للجو فيتكثف الغاز ويتحول لسائل."
  },
  {
    id: 5,
    question: "Escalators in railway stations are mainly used to:",
    translation: "تُستخدم السلالم المتحركة (Escalators) في محطات القطارات بشكل أساسي لـ:",
    options: [
      "A. Increase train power | أ) زيادة القوة الميكانيكية للقطار",
      "B. Transport passengers between levels | ب) نقل وتسهيل حركة الركاب بين الطوابق والمستويات المختلفة للمحطة",
      "C. Control railway signals | ج) التحكم في سيمافورات وإشارات السكة",
      "D. Operate train doors | د) تشغيل وفتح أبواب عربات القطار"
    ],
    answer: "B. Transport passengers between levels | ب) نقل وتسهيل حركة الركاب بين الطوابق والمستويات المختلفة للمحطة",
    hintEN: "Escalators manage heavy pedestrian flows, efficiently moving crowds between platforms, concourses, and street levels.",
    hintAR: "تعد السلالم المتحركة شريان الحركة في المحطات لتفادي التكدس ونقل الركاب بسلاسة بين الأرصفة وصالات التذاكر."
  },
  {
    id: 6,
    question: "Which of the following is an escalator component?",
    translation: "أي مما يلي يُعد من المكونات الأساسية للسلم المتحرك؟",
    options: [
      "A. Step chain | أ) جنزير / سلسلة الدرج",
      "B. Gear reduction | ب) صندوق التروس لخفض السرعة (الجيربوكس)",
      "C. Electric drive | ج) وحدة المحرك والمشغل الكهربائي",
      "D. All of the above | د) كل ما سبق صحيح"
    ],
    answer: "D. All of the above | د) كل ما سبق صحيح",
    hintEN: "An escalator relies on an electric drive and gear reduction to pull the continuous loop of step chains safely.",
    hintAR: "يتكون السلم المتحرك ميكانيكياً من منظومة متكاملة تشمل الموتور، صندوق التروس، وسلاسل السحب لتحريك الدرج."
  },
  {
    id: 7,
    question: "Auxiliary systems in trains include:",
    translation: "تشمل الأنظمة المساعدة والفرعية (Auxiliary systems) في القطارات:",
    options: [
      "A. Batteries | أ) مصفوفات البطاريات الكهربائية",
      "B. Generators | ب) المولدات الكهربائية (الجنريتور)",
      "C. Compressed air systems | ج) أنظمة الهواء المضغوط (النيوماتيك)",
      "D. All of the above | د) كل ما سبق صحيح"
    ],
    answer: "D. All of the above | د) كل ما سبق صحيح",
    hintEN: "Auxiliary systems provide critical non-traction power for lighting, braking, electronics, and control circuits.",
    hintAR: "الأنظمة المساعدة هي المسؤول الأول عن تشغيل كافة الوظائف غير المتعلقة بالجر المباشر، مثل الإضاءة والفرامل والتحكم."
  },
  {
    id: 8,
    question: "Which system is mainly responsible for operating train air brakes?",
    translation: "أي الأنظمة التالية هو المسؤول الرئيسي عن تشغيل الفرامل الهوائية للقطار؟",
    options: [
      "A. Hydraulic system | أ) النظام الهيدروليكي (ضغط الزيت)",
      "B. Compressed air system | ب) نظام الهواء المضغوط (النيوماتيك)",
      "C. Cooling system | ج) نظام التبريد",
      "D. Fuel system | د) نظام الوقود والإمداد"
    ],
    answer: "B. Compressed air system | ب) نظام الهواء المضغوط (النيوماتيك)",
    hintEN: "Train air brake systems use highly regulated compressed air from the main reservoir to apply and release brakes.",
    hintAR: "تعتمد فرامل القطارات على خطوط مستمرة من الهواء المضغوط للتحكم في الأسطوانات وتطبيق لقم الفرامل على العجلات."
  },
  {
    id: 9,
    question: "The air dryer in a compressed air system is used to:",
    translation: "يُستخدم 'مجفف الهواء' (Air Dryer) في نظام الهواء المضغوط من أجل:",
    options: [
      "A. Increase air pressure | أ) زيادة ورفع ضغط الهواء",
      "B. Remove moisture from compressed air | ب) إزالة الرطوبة والماء من الهواء المضغوط",
      "C. Cool the locomotive engine | ج) تبريد محرك الديزل للجرار",
      "D. Generate electricity | د) توليد الطاقة الكهربائية"
    ],
    answer: "B. Remove moisture from compressed air | ب) إزالة الرطوبة والماء من الهواء المضغوط",
    hintEN: "Removing moisture prevents water condensation in valves, which can cause rust, freezing, or braking system failures.",
    hintAR: "تجفيف الهواء يحمي البلوف والصمامات الحساسة من الصدأ أو التجمد شتاءً، مما يضمن كفاءة واستجابة الفرامل."
  },
  {
    id: 10,
    question: "Alternators in trains are used to:",
    translation: "تُستخدم المولدات (Alternators) في القطارات من أجل:",
    options: [
      "A. Generate AC electrical power | أ) توليد طاقة كهربائية ذات تيار متردد (AC)",
      "B. Control escalators | ب) التحكم في السلالم المتحركة للمحطة",
      "C. Reduce train speed | ج) خفض سرعة مسير القطار",
      "D. Compress air | د) ضغط الهواء في الخزانات"
    ],
    answer: "A. Generate AC electrical power | أ) توليد طاقة كهربائية ذات تيار متردد (AC)",
    hintEN: "Main or auxiliary alternators convert the mechanical energy of the diesel engine into AC electricity for the train systems.",
    hintAR: "يقوم المولد بتحويل الحركة الميكانيكية القادمة من محرك الديزل إلى كهرباء AC لتشغيل أنظمة الجر أو التكييف والإضاءة."
  },
  {
    id: 11,
    question: "What is the primary function of a train coupler?",
    translation: "ما هي الوظيفة الأساسية والعملية لجهاز التناغم والشد (Coupler) في القطارات؟",
    options: [
      "A. Passenger comfort | أ) توفير سبل الراحة للركاب",
      "B. Coach decoration | ب) تزيين وتحسين مظهر العربات الخارجي",
      "C. Connecting coaches and transmitting forces | ج) ربط وتوصيل العربات ببعضها ونقل قوى الشد والجر",
      "D. Noise insulation | د) عزل الضوضاء والأصوات الخارجية"
    ],
    answer: "C. Connecting coaches and transmitting forces | ج) ربط وتوصيل العربات ببعضها ونقل قوى الشد والجر",
    hintEN: "Couplers physically lock rolling stock units together, distributing draft and braking forces throughout the train length.",
    hintAR: "يقوم جهاز الشد (الكبلو) بربط أجزاء القطار ميكانيكياً لضمان نقل قوى الجر والفرملة بشكل آمن على طول السكة."
  },
  {
    id: 12,
    question: "Which coupler is considered obsolete due to safety risks?",
    translation: "أي من أجهزة الشد التالية يُعتبر قديماً وملغياً (Obsolete) نظراً لمخاطره الشديدة على السلامة؟",
    options: [
      "A. Buckeye | أ) كبلو الباك آي (Buckeye)",
      "B. Screw coupling | ب) كبلو الزرجينة / الشد القلاووظي (Screw Coupling)",
      "C. Bar coupler | ج) الكبلو القضيبي الثابت (Bar Coupler)",
      "D. Link-and-Pin | د) كبلو الوتد والحلقة (Link-and-Pin)"
    ],
    answer: "D. Link-and-Pin | د) كبلو الوتد والحلقة (Link-and-Pin)",
    hintEN: "The Link-and-Pin system required switchmen to walk between moving cars to manually drop a pin, causing numerous fatal accidents in early rail history.",
    hintAR: "جهاز الوتد والحلقة قديم جداً، وكان يتطلب وقوف الفني بين العربات المتحركة لإسقاط الخابور يدوياً، مما تسبب في حوادث قاتلة قديماً."
  },
  {
    id: 13,
    question: "Which coupler is mainly used in fixed-formation trainsets?",
    translation: "أي أجهزة الشد التالية يُستخدم بشكل رئيسي في القطارات ذات التشكيل الثابت (Fixed-formation trainsets)؟",
    options: [
      "A. Screw coupling | أ) كبلو الشد القلاووظي (الزرجينة)",
      "B. Bar coupler | ب) الكبلو القضيبي الثابت (Bar Coupler)",
      "C. Buckeye coupler | ج) كبلو الباك آي (Buckeye)",
      "D. Scharfenberg coupler | د) كبلو الشارفنبرج الأوتوماتيكي"
    ],
    answer: "B. Bar coupler | ب) الكبلو القضيبي الثابت (Bar Coupler)",
    hintEN: "Bar couplers semi-permanently connect coaches that are rarely separated except during heavy maintenance workshops overhauls.",
    hintAR: "يُستخدم كبلو القضيب للربط شبه الدائم بين العربات التي لا يتم فصلها في التشغيل اليومي إلا داخل الورش الكبيرة."
  },
  {
    id: 14,
    question: "The Screw Coupling relies on which additional component to absorb shock?",
    translation: "على أي المكونات الإضافية يعتمد كبلو الشد القلاووظي (Screw Coupling) لامتصاص وجبه الصدمات؟",
    options: [
      "A. Knuckle | أ) الفك الميكانيكي (Knuckle)",
      "B. Air springs | ب) القرب الهوائية (Air Springs)",
      "C. Side buffers | ج) التصادمات الجانبية / الصدامات (Side Buffers)",
      "D. Gear box | د) صندوق التروس"
    ],
    answer: "C. Side buffers | ج) التصادمات الجانبية / الصدامات (Side Buffers)",
    hintEN: "Traditional screw couplings only handle tension (pulling forces); heavy spring-loaded side buffers on coach corners are required to handle compression (pushing) shocks.",
    hintAR: "الزرجينة القلاووظية تنقل قوى الشد فقط، لذلك تحتاج لـ 'الصدامات' الكبيرة الموجودة على الأركان لامتصاص قوى الضغط والاصطدام."
  },
  {
    id: 15,
    question: "Which coupler integrates mechanical, pneumatic, and electrical connections?",
    translation: "أي أجهزة الشد التالية يقوم بدمج وتوصيل الخطوط الميكانيكية، النيوماتيكية (الهواء)، والكهربائية معاً في آن واحد؟",
    options: [
      "A. Buckeye | أ) كبلو الباك آي (Buckeye)",
      "B. Bar coupler | ب) الكبلو القضيبي الثابت",
      "C. Screw coupling | ج) كبلو الشد القلاووظي",
      "D. Scharfenberg | د) كبلو الشارفنبرج (Scharfenberg)"
    ],
    answer: "D. Scharfenberg | د) كبلو الشارفنبرج (Scharfenberg)",
    hintEN: "The fully automatic Scharfenberg coupler couples mechanical joints, air brake lines, and electrical control circuits in a single forward movement.",
    hintAR: "جهاز الشارفنبرج أوتوماتيكي بالكامل؛ بمجرد تلامس القطارين يربط الحديد، ويوصل خراطيم الهواء، والأسلاك الكهربائية في ثوانٍ بدون تدخل بشري."
  },
  {
    id: 16,
    question: "Which coupler is standard for heavy-haul freight railways?",
    translation: "أي أجهزة الشد التالية يُعتبر القياسي والمعتمد لقطارات نقل البضائع ذات الحمولات الثقيلة (Heavy-haul freight)؟",
    options: [
      "A. Screw coupling | أ) كبلو الشد القلاووظي (الزرجينة)",
      "B. Buckeye coupler | ب) كبلو الباك آي / الفك الأوتوماتيكي (Buckeye/Janney)",
      "C. Bar coupler | ج) الكبلو القضيبي الثابت",
      "D. Link-and-Pin | د) كبلو الوتد والحلقة القديم"
    ],
    answer: "B. Buckeye coupler | ب) كبلو الباك آي / الفك الأوتوماتيكي (Buckeye/Janney)",
    hintEN: "The Buckeye (or Janney/Knuckle) coupler is highly durable and automatic, making it ideal for resisting massive draft loads in heavy freight operations.",
    hintAR: "كبلو الباك آي (الـ Knuckle) يتميز بمتانته الميكانيكية العالية وقدرته على تحمل أوزان بضائع ضخمة وقوى شد هائلة دون انقطاع."
  },
  {
    id: 17,
    question: "Which door type is considered a major safety risk?",
    translation: "أي أنواع أبواب عربات القطار التالية يُعتبر خطراً كبيراً على سلامة الركاب (Major safety risk)؟",
    options: [
      "A. Plug doors | أ) الأبواب الانضغاطية المحكمة (Plug Doors)",
      "B. Sliding pocket doors | ب) الأبواب المنزلقة داخل الجدار (Sliding Pocket)",
      "C. Slam doors | ج) الأبواب المفصلية العادية / أبواب الخبط (Slam Doors)",
      "D. External sliding doors | د) الأبواب المنزلقة الخارجية"
    ],
    answer: "C. Slam doors | ج) الأبواب المفصلية العادية / أبواب الخبط (Slam Doors)",
    hintEN: "Slam doors can be opened manually by passengers while the train is moving, creating a catastrophic falling hazard.",
    hintAR: "أبواب الخبط أو المفصلية التقليدية تفتح يدوياً للخارج، ومخاطرها كارثية لأن الركاب يمكنهم فتحها أثناء سير القطار بسرعة."
  },
  {
    id: 18,
    question: "Which door type provides the best acoustic insulation?",
    translation: "أي أنواع الأبواب التالية يوفر أفضل عزل صوتي وصوتي وضوضائي (Acoustic insulation) داخل العربة؟",
    options: [
      "A. Slam doors | أ) الأبواب المفصلية التقليدية",
      "B. Bi-folding doors | ب) الأبواب المنطوية (Bi-folding)",
      "C. Plug doors | ج) الأبواب الانضغاطية المحكمة (Plug Doors)",
      "D. Sliding pocket doors | د) الأبواب المنزلقة داخل الجدار"
    ],
    answer: "C. Plug doors | ج) الأبواب الانضغاطية المحكمة (Plug Doors)",
    hintEN: "Plug doors move flush with the exterior skin and seal tightly into the frame under pressure, providing excellent acoustic and weather isolation.",
    hintAR: "الباب الانضغاطي (Plug Door) يندمج مع هيكل العربة الخارجي وينكبس للداخل عند الغلق، مما يمنع دخول الهواء والضوضاء تماماً."
  },
  {
    id: 19,
    question: "Why are sliding pocket doors used in urban rail systems?",
    translation: "لماذا تُستخدم الأبواب المنزلقة الجدارية (Sliding pocket doors) بكثرة في قطارات الحضر ومترو الأنفاق؟",
    options: [
      "A. They are cheaper | أ) لأنها أقل تكلفة واقتصادية جداً",
      "B. They reduce maintenance | ب) لأنها تقلل من عمليات الصيانة الدورية",
      "C. They maximize interior space | ج) لأنها تستغل وتوفر المساحة الداخلية للعربة لأقصى حد للركاب",
      "D. They improve aerodynamics | د) لأنها تحسن من أيروديناميكية ومقاومة الهواء للقطار"
    ],
    answer: "C. They maximize interior space | ج) لأنها تستغل وتوفر المساحة الداخلية للعربة لأقصى حد للركاب",
    hintEN: "By sliding directly inside the coach wall pockets, these doors do not encroach on floor space, allowing more standing room for passengers.",
    hintAR: "لأن الباب ينزلق ويختفي تماماً داخل تجويف جدار العربة، فلا يأخذ أي مساحة من صالة الركاب المزدحمة في المترو."
  },
  {
    id: 20,
    question: "Which door system is easiest to maintain?",
    translation: "أي أنظمة الأبواب التالية يُعتبر الأسهل في عمليات الصيانة والإصلاح (Easiest to maintain)؟",
    options: [
      "A. Plug doors | أ) الأبواب الانضغاطية المحكمة",
      "B. External sliding doors | ب) الأبواب المنزلقة الخارجية (External Sliding Doors)",
      "C. Bi-folding doors | ج) الأبواب المنطوية",
      "D. Slam doors | د) الأبواب المفصلية العادية"
    ],
    answer: "B. External sliding doors | ب) الأبواب المنزلقة الخارجية (External Sliding Doors)",
    hintEN: "External sliding doors employ simpler linear tracks and mechanisms outside the coach structure, making components easily accessible for technicians.",
    hintAR: "الأبواب المنزلقة الخارجية ميكانيزم تشغيلها بسيط ومثبت خارج هيكل العربة، مما يسهل على الفني الوصول للأجزاء وصيانتها بسرعة."
  },
  {
    id: 21,
    question: "Modern railway systems aim to provide safe and comfortable transportation.",
    translation: "تهدف أنظمة السكك الحديدية الحديثة إلى توفير نقل آمن ومريح.",
    options: ["True", "False"],
    answer: "True",
    hint: "Safety and comfort are the two core pillars for designing any modern transit system.",
    hintTranslation: "الأمان والراحة هما الركيزتان الأساسيتان لتصميم أي وسيلة نقل حديثة."
  },
  {
    id: 22,
    question: "HVAC systems improve air quality inside railway coaches.",
    translation: "أنظمة التكييف والتهوية (HVAC) تحسن جودة الهواء داخل عربات القطارات.",
    options: ["True", "False"],
    answer: "True",
    hint: "Temperature control and air filtration are essential for a comfortable passenger environment.",
    hintTranslation: "التحكم في درجات الحرارة وتنقية الهواء ضرورة لبيئة مريحة وصحية للركاب."
  },
  {
    id: 23,
    question: "The evaporator coil releases heat to the outside air.",
    translation: "ملف المبخر يطرد الحرارة إلى الهواء الخارجي.",
    options: ["True", "False"],
    answer: "False",
    hint: "The evaporator absorbs heat from the inside, while the condenser is responsible for releasing it outside.",
    hintTranslation: "المبخر يمتص الحرارة من الداخل، بينما المكثف هو المسؤول عن طردها للخارج."
  },
  {
    id: 24,
    question: "Escalators help improve passenger flow in railway stations.",
    translation: "السلالم المتحركة تساعد في تحسين تدفق الركاب في المحطات.",
    options: ["True", "False"],
    answer: "True",
    hint: "They prevent congestion and facilitate quick passenger movement between different levels and platforms.",
    hintTranslation: "تمنع التكدس وتسهل الحركة السريعة للركاب بين الأرصفة والصالات المختلفة."
  },
  {
    id: 25,
    question: "The electric drive provides power to move escalator steps.",
    translation: "المحرك الكهربائي يوفر الطاقة اللازمة لتحريك درجات السلالم المتحركة.",
    options: ["True", "False"],
    answer: "True",
    hint: "Without a power source and a mechanical motor, the stairs would remain a fixed structure.",
    hintTranslation: "بدون وجود مصدر طاقة ومحرك ميكانيكي، ستظل السلالم مجرد هيكل ثابت."
  },
  {
    id: 26,
    question: "Auxiliary systems are not necessary for train operation.",
    translation: "الأنظمة المساعدة ليست ضرورية لتشغيل القطار.",
    options: ["True", "False"],
    answer: "False",
    hint: "Lighting, air conditioning, and control systems rely heavily on auxiliary systems to function properly.",
    hintTranslation: "أنظمة الإضاءة، التكييف، والتحكم تعتمد كلياً على الأنظمة المساعدة لضمان عمل القطار."
  },
  {
    id: 27,
    question: "Compressed air systems are used to operate train brakes.",
    translation: "أنظمة الهواء المضغوط تستخدم لتشغيل مكابح القطارات.",
    options: ["True", "False"],
    answer: "True",
    hint: "Compressed air is the most reliable mechanical medium to safely stop massive steel train masses.",
    hintTranslation: "الهواء المضغوط هو الوسيط الميكانيكي الأكثر موثوقية لإيقاف الكتل الحديدية الضخمة."
  },
  {
    id: 28,
    question: "The air compressor produces compressed air in locomotives.",
    translation: "ضاغط الهواء ينتج الهواء المضغوط في القاطرات.",
    options: ["True", "False"],
    answer: "True",
    hint: "It is the mechanical component responsible for drawing atmospheric air, compressing it, and feeding the network.",
    hintTranslation: "هو المكون الميكانيكي المسؤول عن سحب الهواء الجوي وضغطه وتغذيته للشبكة."
  },
  {
    id: 29,
    question: "The main reservoir stores compressed air.",
    translation: "الخزان الرئيسي يخزن الهواء المضغوط.",
    options: ["True", "False"],
    answer: "True",
    hint: "It acts as a backup storage to ensure there is no sudden pressure drop in the braking and other auxiliary systems.",
    hintTranslation: "يعمل كمخزن احتياطي لضمان عدم حدوث هبوط مفاجئ في ضغط الفرامل والأنظمة الأخرى."
  },
  {
    id: 30,
    question: "Comfort and safety systems work together in modern railway engineering.",
    translation: "أنظمة الراحة والأمان تعمل معاً في هندسة السكك الحديدية الحديثة.",
    options: ["True", "False"],
    answer: "True",
    hint: "Modern integrated design aims to deliver a safe and comfortable experience simultaneously without separating them.",
    hintTranslation: "التكامل في التصميم الحديث يهدف لتقديم تجربة آمنة ومريحة في آن واحد دون فصل بينهما."
  },
  {
    id: 31,
    question: "The Link-and-Pin coupler requires automatic operation.",
    translation: "أداة الربط من نوع 'حلقة ودبوس' تتطلب تشغيلاً أوتوماتيكياً.",
    options: ["True", "False"],
    answer: "False",
    hint: "This is a very old, traditional method that requires dangerous manual intervention by workers to couple the coaches.",
    hintTranslation: "هذه طريقة تقليدية قديمة جداً وتتطلب تدخلاً يدوياً خطيراً من العمال للربط."
  },
  {
    id: 32,
    question: "Bar couplers are suitable for trains that frequently change coach numbers.",
    translation: "أداة الربط القضيبية (Bar) مناسبة للقطارات التي تغير عدد عرباتها باستمرار.",
    options: ["True", "False"],
    answer: "False",
    hint: "This type is used for fixed formations that are rarely uncoupled except inside maintenance workshops.",
    hintTranslation: "هذا النوع يُستخدم للقطارات ذات التشكيل الثابت (Fixed Formations) التي لا تنفصل إلا في الورش."
  },
  {
    id: 33,
    question: "Screw couplings are common in Europe and the Middle East.",
    translation: "الوصلات اللولبية شائعة في أوروبا والشرق الأوسط.",
    options: ["True", "False"],
    answer: "True",
    hint: "They are considered among the traditional standard systems that remain in service on lines across these regions.",
    hintTranslation: "تعتبر من الأنظمة القياسية التقليدية المستمرة في الخدمة في خطوط هذه المناطق."
  },
  {
    id: 34,
    question: "Buckeye couplers eliminate the need for workers to stand between coaches.",
    translation: "وصلات 'بوكاي' تلغي الحاجة لوقوف العمال بين العربات.",
    options: ["True", "False"],
    answer: "True",
    hint: "They were invented and designed to enhance worker safety by allowing automatic coupling upon contact.",
    hintTranslation: "تم ابتكارها وتصميمها لتعزيز سلامة المناورين عبر السماح بالربط التلقائي عند التلامس."
  },
  {
    id: 35,
    question: "Scharfenberg couplers allow slack between connected coaches.",
    translation: "وصلات 'شارفنبيرج' تسمح بوجود فجوة (رخاوة) بين العربات المتصلة.",
    options: ["True", "False"],
    answer: "False",
    hint: "This type provides a highly precise and rigid connection with zero play to ensure maximum stability.",
    hintTranslation: "هذا النوع يوفر اتصالاً محكماً ودقيقاً جداً (Rigid) بدون أي بوش أو ارتخاء لضمان الثبات."
  },
  {
    id: 36,
    question: "Slam doors can be safely opened while the train is moving.",
    translation: "أبواب 'سْلام' يمكن فتحها بأمان أثناء حركة القطار.",
    options: ["True", "False"],
    answer: "False",
    hint: "Traditional manual doors pose a fatal safety hazard if opened while the train is in motion.",
    hintTranslation: "الأبواب اليدوية التقليدية تشكل خطراً مميتاً على السلامة إذا فُتحت أثناء السير."
  },
  {
    id: 137,
    question: "Bi-folding doors require frequent maintenance due to multiple moving parts.",
    translation: "الأبواب القابلة للطي (Bi-folding) تحتاج صيانة متكررة لكثرة أجزائها المتحركة.",
    options: ["True", "False"],
    answer: "True",
    hint: "An increased number of mechanical hinges and linkages naturally raises friction and potential failure rates.",
    hintTranslation: "زيادة عدد المفصلات والمحاور الميكانيكية ترفع تلقائياً من معدلات الاحتكاك والأعطال."
  },
  {
    id: 38,
    question: "Plug doors sit flush with the train body to reduce aerodynamic drag.",
    translation: "أبواب 'التوصيل' (Plug doors) تكون مستوية مع هيكل القطار لتقليل السحب الأيروديناميكي.",
    options: ["True", "False"],
    answer: "True",
    hint: "Streamlining and sealing gaps with the outer body are the main goals to reduce air resistance.",
    hintTranslation: "الانسيابية وسد الفجوات مع الهيكل الخارجي هما الهدف الأساسي لتقليل مقاومة الهواء."
  },
  {
    id: 39,
    question: "External sliding doors are commonly used in metro systems.",
    translation: "الأبواب المنزلقة الخارجية شائعة الاستخدام في أنظمة المترو.",
    options: ["True", "False"],
    answer: "True",
    hint: "Their design allows doors to open quickly without occupying internal cabin space, facilitating heavy crowd control.",
    hintTranslation: "تصميمها يسمح بفتح الأبواب سريعاً دون أخذ مساحة من داخل العربة، مما يسهل حركة الحشود."
  },
  {
    id: 40,
    question: "Modern railway engineering focuses on safety, efficiency, and passenger comfort.",
    translation: "هندسة السكك الحديدية الحديثة تركز على الأمان، الكفاءة، وراحة الركاب.",
    options: ["True", "False"],
    answer: "True",
    hint: "This is the core golden triangle used to evaluate and develop any advanced mass transit system.",
    hintTranslation: "هذا هو المثلث الأساسي والمعيار الذهبي لتقييم وتطوير أي شبكة نقل جماعي متطورة."
  }
];
