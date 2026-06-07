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
  }
];
