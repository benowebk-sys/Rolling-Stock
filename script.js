function normalizeQuizData(items) {
    return items.map(item => {
        const normalized = { ...item };

        if (!normalized.arabicQuestion) {
            normalized.arabicQuestion = normalized.translation || '';
        }
        if (!normalized.arabicOptions) {
            normalized.arabicOptions = {};
        }

        if (Array.isArray(normalized.options)) {
            const optionsObj = {};
            const arabicOptionsObj = {};

            normalized.options.forEach(optionText => {
                if (typeof optionText !== 'string') return;
                const match = optionText.trim().match(/^([A-D])[.)]?\s*(.*)$/i);
                if (!match) return;
                const key = match[1].toUpperCase();
                const rest = match[2] || '';
                const parts = rest.split('|').map(part => part.trim());

                optionsObj[key] = parts[0] || rest;
                arabicOptionsObj[key] = parts[1] || '';
            });

            normalized.options = optionsObj;
            normalized.arabicOptions = Object.keys(arabicOptionsObj).length ? arabicOptionsObj : normalized.arabicOptions;
        }

        if (!normalized.correctAnswer && typeof normalized.answer === 'string') {
            const ansMatch = normalized.answer.trim().match(/^([A-D])/i);
            if (ansMatch) normalized.correctAnswer = ansMatch[1].toUpperCase();
        }

        if (!normalized.hint) normalized.hint = normalized.hintEN || '';
        if (!normalized.arabicHint) normalized.arabicHint = normalized.hintAR || '';

        return normalized;
    });
}

const quizData2Normalized = normalizeQuizData(typeof quizData2 !== 'undefined' ? quizData2 : []);
const quizDataMain = normalizeQuizData([
    {
        id: 1,
        question: "Which coupler type is characterized by a 'knuckle' shape and is standard for heavy-haul and most modern passenger trains?",
        arabicQuestion: "أي نوع من القارنات يتميز بشكل الفك (Knuckle) ويُستخدم كمعيار في قطارات الشحن الثقيلة ومعظم قطارات الركاب الحديثة؟",
        options: {
            A: "Link and Pin",
            B: "Screw Coupler",
            C: "Buckeye (Janney) Coupler",
            D: "Bar Coupler"
        },
        arabicOptions: {
            A: "القارن بالوصلة والمسمار",
            B: "القارن اللولبي",
            C: "قارن باكاي (جاني)",
            D: "القارن القضباني"
        },
        correctAnswer: "C",
        explanation: "The Buckeye (Janney) Coupler uses a knuckle-shaped automatic locking mechanism widely used in modern railway systems.",
        hint: "Think about the automatic coupler commonly used on modern heavy railway vehicles.",
        arabicHint: "فكر في القارن الأوتوماتيكي المعياري المستخدم على مركبات السكك الحديدية الثقيلة الحديثة."
    },
    {
        id: 2,
        question: "In a 'Screw Coupler' arrangement, what component is used to absorb the pushing forces between coaches?",
        arabicQuestion: "في نظام القارن اللولبي، ما المكون المستخدم لامتصاص قوى الدفع بين العربات؟",
        options: {
            A: "The drawbar",
            B: "Side buffers",
            C: "The knuckle",
            D: "The pivot pin"
        },
        arabicOptions: {
            A: "قضيب السحب",
            B: "المصدات الجانبية",
            C: "الفك",
            D: "مسمار الارتكاز"
        },
        correctAnswer: "B",
        explanation: "Side buffers absorb compressive forces while the screw coupler handles tensile forces.",
        hint: "One component handles pulling while another cushions compression.",
        arabicHint: "مكون واحد يتعامل مع الشد والآخر يمتص الضغط."
    },
    {
        id: 3,
        question: "Which door type is flush with the bodyside when closed and moves outwards before sliding parallel to the coach?",
        arabicQuestion: "أي نوع من الأبواب يكون مستوياً مع جسم العربة عند الإغلاق ثم يتحرك للخارج قبل أن ينزلق موازياً للعربة؟",
        options: {
            A: "Slam door",
            B: "Sliding pocket door",
            C: "Plug door",
            D: "Bi-folding door"
        },
        arabicOptions: {
            A: "باب Slam",
            B: "الباب الجيبي المنزلق",
            C: "باب Plug",
            D: "الباب ثنائي الطي"
        },
        correctAnswer: "C",
        explanation: "Plug doors move outward first before sliding sideways to improve sealing.",
        hint: "This design improves insulation and reduces noise.",
        arabicHint: "يحسن هذا التصميم العزل ويقلل الضوضاء."
    },
    {
        id: 4,
        question: "'Slam doors' are primarily distinguished by:",
        arabicQuestion: "ما الذي يميز أبواب Slam Doors بشكل أساسي؟",
        options: {
            A: "Being operated by compressed air",
            B: "Having hinges and opening outwards, requiring manual closing",
            C: "Sliding into a recess within the wall",
            D: "Folding in the middle like an accordion"
        },
        arabicOptions: {
            A: "تعمل بالهواء المضغوط",
            B: "تحتوي على مفصلات وتفتح للخارج وتتطلب غلقاً يدوياً",
            C: "تنزلق داخل تجويف بالجدار",
            D: "تنطوي في المنتصف مثل الأكورديون"
        },
        correctAnswer: "B",
        explanation: "Slam doors are manually operated hinged doors commonly found on older trains.",
        hint: "These doors existed before modern automatic sliding systems.",
        arabicHint: "كانت هذه الأبواب موجودة قبل أنظمة الانزلاق الحديثة."
    },
    {
        id: 5,
        question: "A 'Sliding Pocket Door' differs from an 'Exterior Sliding Door' because:",
        arabicQuestion: "ما الفرق بين الباب الجيبي المنزلق والباب الخارجي المنزلق؟",
        options: {
            A: "It opens faster",
            B: "It slides into a cavity within the coach wall",
            C: "It is only used for freight",
            D: "It requires no electricity"
        },
        arabicOptions: {
            A: "يفتح بسرعة أكبر",
            B: "ينزلق داخل تجويف بجدار العربة",
            C: "يستخدم فقط للشحن",
            D: "لا يحتاج إلى كهرباء"
        },
        correctAnswer: "B",
        explanation: "Pocket doors disappear into a recess inside the wall structure.",
        hint: "The door becomes hidden when fully opened.",
        arabicHint: "يختفي الباب داخل الهيكل عند فتحه بالكامل."
    },
    {
        id: 6,
        question: "In a split air-conditioned coach, the 'evaporator' is typically responsible for:",
        arabicQuestion: "في عربة مزودة بتكييف منفصل، ما الوظيفة الأساسية للمبخر؟",
        options: {
            A: "Compressing the refrigerant gas",
            B: "Cooling the air before it is blown into the passenger area",
            C: "Releasing heat to the outside environment",
            D: "Heating the cabin during winter"
        },
        arabicOptions: {
            A: "ضغط غاز التبريد",
            B: "تبريد الهواء قبل ضخه للركاب",
            C: "طرد الحرارة للخارج",
            D: "تدفئة العربة"
        },
        correctAnswer: "B",
        explanation: "The evaporator absorbs heat from cabin air to produce cooling.",
        hint: "Passengers directly feel the effect of this component.",
        arabicHint: "الركاب يشعرون مباشرة بتأثير هذا المكون."
    },
    {
        id: 7,
        question: "The primary purpose of a 'Bar Coupler' is usually to:",
        arabicQuestion: "ما الغرض الأساسي للقارن القضباني؟",
        options: {
            A: "Provide temporary emergency towing only",
            B: "Form a semi-permanent connection between coaches in a fixed rake",
            C: "Allow the train to articulate over 90-degree curves",
            D: "Transfer high-voltage electricity between cars"
        },
        arabicOptions: {
            A: "السحب المؤقت للطوارئ",
            B: "إنشاء وصلة شبه دائمة بين العربات",
            C: "السماح بالحركة المفصلية الحادة",
            D: "نقل الجهد العالي"
        },
        correctAnswer: "B",
        explanation: "Bar couplers are commonly used where uncoupling is infrequent.",
        hint: "This type is intended for fixed formations.",
        arabicHint: "هذا النوع مخصص لتشكيلات ثابتة."
    },
    {
        id: 8,
        question: "Which component of the Air Conditioning system is responsible for increasing the pressure and temperature of the refrigerant vapor?",
        arabicQuestion: "أي مكون في نظام التكييف يرفع ضغط ودرجة حرارة وسيط التبريد؟",
        options: {
            A: "Condenser",
            B: "Evaporator",
            C: "Compressor",
            D: "Expansion Valve"
        },
        arabicOptions: {
            A: "المكثف",
            B: "المبخر",
            C: "الضاغط",
            D: "صمام التمدد"
        },
        correctAnswer: "C",
        explanation: "The compressor compresses refrigerant vapor and raises its pressure and temperature.",
        hint: "This is considered the heart of the refrigeration cycle.",
        arabicHint: "يعتبر قلب دورة التبريد."
    },
    {
        id: 9,
        question: "Heating elements in passenger coaches are ideally located near the floor because:",
        arabicQuestion: "لماذا يتم تركيب عناصر التدفئة قرب الأرضية؟",
        options: {
            A: "It protects them from luggage damage",
            B: "Hot air naturally rises, creating a convection current that warms the cabin efficiently",
            C: "It is closer to the main battery supply",
            D: "It prevents the wheels from freezing"
        },
        arabicOptions: {
            A: "لحمايتها من الأمتعة",
            B: "لأن الهواء الساخن يرتفع طبيعياً",
            C: "لقربها من البطارية",
            D: "لمنع تجمد العجلات"
        },
        correctAnswer: "B",
        explanation: "Warm air rises and spreads efficiently through convection currents.",
        hint: "Think about how heaters work inside rooms.",
        arabicHint: "فكر في كيفية عمل السخانات داخل الغرف."
    },
    {
        id: 10,
        question: "What is the main function of the 'Alternator' in a passenger coach power supply system?",
        arabicQuestion: "ما الوظيفة الأساسية للمولد في عربة الركاب؟",
        options: {
            A: "To convert AC power back into mechanical energy",
            B: "To generate electrical power from axle rotation during movement",
            C: "To store emergency power",
            D: "To regulate brake pressure"
        },
        arabicOptions: {
            A: "تحويل الكهرباء إلى حركة",
            B: "توليد الكهرباء من دوران المحور",
            C: "تخزين الطاقة",
            D: "تنظيم ضغط الفرامل"
        },
        correctAnswer: "B",
        explanation: "Axle rotation drives the alternator to produce electrical power.",
        hint: "Mechanical motion becomes electrical energy.",
        arabicHint: "تصبح الحركة الميكانيكية طاقة كهربائية."
    },
    {
        id: 11,
        question: "Why are 'Batteries' essential in an axle-driven generator system?",
        arabicQuestion: "لماذا تعتبر البطاريات ضرورية في نظام المولد المعتمد على المحور؟",
        options: {
            A: "To increase train speed",
            B: "To provide power when the train is stationary or moving slowly",
            C: "To run the AC compressor all night",
            D: "To ground the chassis"
        },
        arabicOptions: {
            A: "لزيادة السرعة",
            B: "لتوفير الطاقة عند التوقف أو السرعات المنخفضة",
            C: "لتشغيل التكييف ليلاً",
            D: "لتأريض الهيكل"
        },
        correctAnswer: "B",
        explanation: "Batteries ensure uninterrupted power at low speeds.",
        hint: "The axle generator becomes less effective at slow movement.",
        arabicHint: "المولد يصبح أقل فعالية عند الحركة البطيئة."
    },
    {
        id: 12,
        question: "The 'Distributor Valve' reacts primarily to pressure changes within the:",
        arabicQuestion: "يستجيب صمام التوزيع بشكل أساسي لتغيرات الضغط داخل:",
        options: {
            A: "Main Reservoir Pipe",
            B: "Brake Pipe",
            C: "Auxiliary Reservoir",
            D: "Brake Cylinder"
        },
        arabicOptions: {
            A: "خط الخزان الرئيسي",
            B: "خط الفرامل",
            C: "الخزان المساعد",
            D: "أسطوانة الفرامل"
        },
        correctAnswer: "B",
        explanation: "Brake pipe pressure changes control brake applications.",
        hint: "This pipe extends through the entire train.",
        arabicHint: "هذا الخط يمتد عبر القطار بأكمله."
    },
    {
        id: 13,
        question: "What is stored in the 'Auxiliary Reservoir' of a coach?",
        arabicQuestion: "ماذا يخزن داخل الخزان المساعد؟",
        options: {
            A: "Drinking water",
            B: "Compressed air for braking",
            C: "Diesel fuel",
            D: "Hydraulic fluid"
        },
        arabicOptions: {
            A: "مياه شرب",
            B: "هواء مضغوط للفرامل",
            C: "وقود ديزل",
            D: "زيت هيدروليكي"
        },
        correctAnswer: "B",
        explanation: "The auxiliary reservoir stores compressed air for brake operation.",
        hint: "It stores energy needed for braking.",
        arabicHint: "يخزن الطاقة اللازمة للفرملة."
    },
    {
        id: 14,
        question: "In a twin-pipe air brake system, what is the main role of the Main Reservoir Pipe?",
        arabicQuestion: "ما الوظيفة الأساسية لخط الخزان الرئيسي في نظام الفرامل ذو الخطين؟",
        options: {
            A: "Apply emergency brakes",
            B: "Recharge auxiliary reservoirs quickly",
            C: "Vent air to atmosphere",
            D: "Control windshield wipers"
        },
        arabicOptions: {
            A: "تشغيل فرامل الطوارئ",
            B: "إعادة شحن الخزانات المساعدة",
            C: "طرد الهواء للخارج",
            D: "تشغيل ماسحات الزجاج"
        },
        correctAnswer: "B",
        explanation: "The second pipe improves charging and brake release performance.",
        hint: "It improves air supply efficiency.",
        arabicHint: "تحسن كفاءة إمداد الهواء."
    },
    {
        id: 15,
        question: "A 'Static Inverter' (IVR) in railway rolling stock is used to:",
        arabicQuestion: "ما وظيفة العاكس الثابت في عربات السكك الحديدية؟",
        options: {
            A: "Transform mechanical motion into heat",
            B: "Convert DC power into regulated AC power",
            C: "Change train direction",
            D: "Stop the train"
        },
        arabicOptions: {
            A: "تحويل الحركة إلى حرارة",
            B: "تحويل DC إلى AC منظم",
            C: "تغيير اتجاه القطار",
            D: "إيقاف القطار"
        },
        correctAnswer: "B",
        explanation: "Static inverters supply regulated AC power to onboard systems.",
        hint: "Many onboard devices require alternating current.",
        arabicHint: "العديد من الأجهزة على متن الطائرة تتطلب تيار متناوب."
    },
    {
        id: 16,
        question: "What is the primary purpose of a 'Bogie' frame in rolling stock?",
        arabicQuestion: "ما الغرض الأساسي من هيكل البوجي؟",
        options: {
            A: "Aerodynamic decoration",
            B: "Support the coach body and distribute weight safely",
            C: "Store luggage",
            D: "Protect from lightning"
        },
        arabicOptions: {
            A: "غطاء انسيابي",
            B: "دعم جسم العربة وتوزيع الوزن",
            C: "تخزين الأمتعة",
            D: "الحماية من الصواعق"
        },
        correctAnswer: "B",
        explanation: "The bogie supports, guides, and stabilizes the coach.",
        hint: "It carries both wheels and vehicle loads.",
        arabicHint: "يحمل العجلات والأحمال معاً."
    },
    {
        id: 17,
        question: "Primary Suspension in a bogie is located between:",
        arabicQuestion: "أين يوجد نظام التعليق الأولي؟",
        options: {
            A: "Bogie frame and coach body",
            B: "Axle box and bogie frame",
            C: "Coupler and drawbar",
            D: "Ceiling and roof sheets"
        },
        arabicOptions: {
            A: "هيكل البوجي وجسم العربة",
            B: "صندوق المحور وهيكل البوجي",
            C: "القارن وقضيب السحب",
            D: "السقف والألواح"
        },
        correctAnswer: "B",
        explanation: "Primary suspension absorbs wheel-rail shocks first.",
        hint: "It is closest to the wheelset.",
        arabicHint: "إنه الأقرب لمجموعة العجلات."
    },
    {
        id: 18,
        question: "What component provides Secondary Suspension for passenger comfort?",
        arabicQuestion: "ما المكون الذي يوفر التعليق الثانوي لراحة الركاب؟",
        options: {
            A: "Rigid steel wedges",
            B: "Air springs or coil springs",
            C: "Rubber bumper shocks",
            D: "Solid iron blocks"
        },
        arabicOptions: {
            A: "إسفينات فولاذية",
            B: "نوابض هوائية أو لولبية",
            C: "ممتصات مطاطية",
            D: "كتل حديدية"
        },
        correctAnswer: "B",
        explanation: "Secondary suspension isolates the coach body from vibrations.",
        hint: "Passenger comfort mainly depends on this suspension stage.",
        arabicHint: "تعتمد راحة الركاب بشكل أساسي على مرحلة التعليق هذه."
    },
    {
        id: 19,
        question: "An 'Auxiliary Compressor' is specifically used to:",
        arabicQuestion: "ما وظيفة الضاغط المساعد؟",
        options: {
            A: "Supply air for the whole train brake system",
            B: "Raise the pantograph and restore air pressure during startup",
            C: "Cool the dining car",
            D: "Inflate maintenance vehicle tires"
        },
        arabicOptions: {
            A: "تغذية فرامل القطار بالكامل",
            B: "رفع البانتوجراف واستعادة الضغط",
            C: "تبريد عربة الطعام",
            D: "نفخ إطارات مركبات الصيانة"
        },
        correctAnswer: "B",
        explanation: "Auxiliary compressors help restore pressure after shutdown.",
        hint: "It helps restart air-dependent systems.",
        arabicHint: "يساعد في إعادة تشغيل الأنظمة المعتمدة على الهواء."
    },
    {
        id: 20,
        question: "The 'Main Compressor' is typically driven by:",
        arabicQuestion: "بماذا يتم تشغيل الضاغط الرئيسي عادة؟",
        options: {
            A: "Hand crank",
            B: "Electric motor or locomotive engine",
            C: "Water flow",
            D: "Wind pressure"
        },
        arabicOptions: {
            A: "ذراع يدوي",
            B: "محرك كهربائي أو محرك الجرار",
            C: "تدفق المياه",
            D: "ضغط الهواء الخارجي"
        },
        correctAnswer: "B",
        explanation: "Main compressors require a strong power source to generate compressed air.",
        hint: "Large air systems need significant mechanical power.",
        arabicHint: "الأنظمة الهوائية الكبيرة تحتاج قوة ميكانيكية كبيرة."
    },
    {
        id: 21,
        question: "What is the function of the 'Unloader Valve' in a compressor system?",
        arabicQuestion: "ما وظيفة صمام التفريغ في نظام الضاغط؟",
        options: {
            A: "Unload passenger luggage",
            B: "Relieve pressure during startup or cut-out conditions",
            C: "Drain engine oil",
            D: "Increase brake power"
        },
        arabicOptions: {
            A: "تفريغ الأمتعة",
            B: "تخفيف الضغط أثناء التشغيل",
            C: "تصريف الزيت",
            D: "زيادة قوة الفرامل"
        },
        correctAnswer: "B",
        explanation: "The unloader valve reduces compressor starting load.",
        hint: "It prevents startup under heavy pressure.",
        arabicHint: "يمنع التشغيل تحت ضغط ثقيل."
    },
    {
        id: 22,
        question: "Low Voltage (LV) control circuits in passenger coaches typically operate within what range?",
        arabicQuestion: "ما مدى الجهد المعتاد لدوائر الجهد المنخفض؟",
        options: {
            A: "10,000V to 25,000V DC",
            B: "24V to 110V DC",
            C: "500V to 750V DC",
            D: "Less than 5V DC"
        },
        arabicOptions: {
            A: "من 10000 إلى 25000 فولت",
            B: "من 24 إلى 110 فولت",
            C: "من 500 إلى 750 فولت",
            D: "أقل من 5 فولت"
        },
        correctAnswer: "B",
        explanation: "This voltage range provides safety and reliability.",
        hint: "Common railway control systems use this range.",
        arabicHint: "تستخدم أنظمة السكك الحديدية هذا المدى بشكل شائع."
    },
    {
        id: 23,
        question: "High Voltage power between passenger coaches is often distributed through:",
        arabicQuestion: "كيف يتم عادة توزيع الجهد العالي بين عربات الركاب؟",
        options: {
            A: "Local terminal blocks",
            B: "Inter-vehicle couplers or UIC cables",
            C: "Wireless induction loops",
            D: "Copper tracks on the floor"
        },
        arabicOptions: {
            A: "أطراف توصيل محلية",
            B: "وصلات بين العربات أو كابلات UIC",
            C: "حلقات حث لاسلكية",
            D: "مسارات نحاسية بالأرضية"
        },
        correctAnswer: "B",
        explanation: "UIC cables distribute power and control signals throughout the train.",
        hint: "These cables are visible between adjacent coaches.",
        arabicHint: "هذه الكابلات مرئية بين العربات المجاورة."
    },
    {
        id: 24,
        question: "What is the role of the 'Air Dryer' in a pneumatic system?",
        arabicQuestion: "ما وظيفة مجفف الهواء في النظام الهوائي؟",
        options: {
            A: "Dry passenger clothes",
            B: "Remove moisture from compressed air",
            C: "Reduce AC humidity",
            D: "Dry brake pads"
        },
        arabicOptions: {
            A: "تجفيف الملابس",
            B: "إزالة الرطوبة من الهواء المضغوط",
            C: "تقليل رطوبة التكييف",
            D: "تجفيف بطانات الفرامل"
        },
        correctAnswer: "B",
        explanation: "Dry air prevents corrosion and freezing inside pneumatic equipment.",
        hint: "Water inside valves can cause failures.",
        arabicHint: "الماء داخل الصمامات يمكن أن يسبب أعطال."
    },
    {
        id: 25,
        question: "A 'Rigid Bogie' design compared to an articulated bogie generally exhibits:",
        arabicQuestion: "ماذا يميز البوجي الصلب مقارنة بالبوجي المفصلي؟",
        options: {
            A: "Lower wheel wear on curves",
            B: "Higher wheel-flange wear on sharp curves",
            C: "Ability to tilt at 45 degrees",
            D: "Zero maintenance"
        },
        arabicOptions: {
            A: "تآكل أقل",
            B: "تآكل أكبر بحواف العجلات",
            C: "القدرة على الميل 45 درجة",
            D: "لا يحتاج صيانة"
        },
        correctAnswer: "B",
        explanation: "Rigid bogies resist curve alignment more than flexible articulated designs.",
        hint: "A stiff structure struggles more on sharp curves.",
        arabicHint: "الهيكل الصلب يواجه صعوبة أكبر في المنحنيات الحادة."
    },
    {
        id: 26,
        question: "What is the primary role of the 'Bogie' (Truck)?",
        arabicQuestion: "ما الوظيفة الأساسية للبوجي (Truck)؟",
        options: {
            A: "To provide a place for passengers to sit",
            B: "To support the vehicle body and guide the wheels along the track",
            C: "To store fuel for the locomotive",
            D: "To act as a coupler"
        },
        arabicOptions: {
            A: "توفير مكان جلوس للركاب",
            B: "دعم جسم العربة وتوجيه العجلات على القضبان",
            C: "تخزين الوقود للجرار",
            D: "العمل كقارنة"
        },
        correctAnswer: "B",
        explanation: "The bogie supports the vehicle body, carries the wheelsets, and guides the train safely along the rails.",
        hint: "This structure carries both the wheels and the coach body.",
        arabicHint: "يحمل هذا الهيكل العجلات وجسم العربة معاً."
    },
    {
        id: 27,
        question: "A 'Rigid Bogie' on a curved track faces the challenge of:",
        arabicQuestion: "ما التحدي الذي يواجهه البوجي الصلب على المنحنيات؟",
        options: {
            A: "Turning too easily",
            B: "Hunting oscillation and high flange wear due to the fixed wheelbase",
            C: "Getting too hot",
            D: "Expanding in length"
        },
        arabicOptions: {
            A: "الدوران بسهولة زائدة",
            B: "الاهتزاز الجانبي وتآكل الحواف بسبب قاعدة العجلات الثابتة",
            C: "ارتفاع درجة الحرارة",
            D: "التمدد في الطول"
        },
        correctAnswer: "B",
        explanation: "Rigid bogies struggle more on curves because the wheelsets cannot align freely with the track.",
        hint: "A fixed wheelbase creates additional flange contact on curves.",
        arabicHint: "قاعدة العجلات الثابتة تخلق تلامساً إضافياً للحواف."
    },
    {
        id: 28,
        question: "In a 'Steerable Bogie,' the wheelsets can:",
        arabicQuestion: "في البوجي القابل للتوجيه، يمكن لمجموعات العجلات أن:",
        options: {
            A: "Be removed by the driver",
            B: "Adjust their angle to align more closely with the radius of a curve",
            C: "Lift off the track entirely",
            D: "Spin at different speeds on a straight track"
        },
        arabicOptions: {
            A: "يتم إزالتها بواسطة السائق",
            B: "تعدل زاويتها لتتوافق مع نصف قطر المنحنى",
            C: "ترتفع عن القضبان بالكامل",
            D: "تدور بسرعات مختلفة على الخط المستقيم"
        },
        correctAnswer: "B",
        explanation: "Steerable bogies improve curve negotiation by allowing wheelsets to align with the track direction.",
        hint: "The design improves guidance through curves.",
        arabicHint: "يحسن التصميم التوجيه عبر المنحنيات."
    },
    {
        id: 29,
        question: "Primary Suspension is located between:",
        arabicQuestion: "يوجد نظام التعليق الأولي بين:",
        options: {
            A: "The bogie frame and the vehicle body",
            B: "The axle box and the bogie frame",
            C: "The coupler and the chassis",
            D: "The two wheels on the same axle"
        },
        arabicOptions: {
            A: "هيكل البوجي وجسم العربة",
            B: "صندوق المحور وهيكل البوجي",
            C: "القارنة والشاسيه",
            D: "العجلتين على نفس المحور"
        },
        correctAnswer: "B",
        explanation: "Primary suspension absorbs shocks directly from wheel and rail interaction.",
        hint: "It is the suspension stage closest to the wheels.",
        arabicHint: "إنها مرحلة التعليق الأقرب للعجلات."
    },
    {
        id: 30,
        question: "What is the function of the 'Equalizer Bar' in older cast steel bogies?",
        arabicQuestion: "ما وظيفة قضيب الموازنة (Equalizer Bar) في البوجيات الفولاذية القديمة؟",
        options: {
            A: "To distribute the load evenly between the axles",
            B: "To lock the brakes",
            C: "To connect the electricity",
            D: "To measure the speed"
        },
        arabicOptions: {
            A: "توزيع الحمل بالتساوي بين المحاور",
            B: "قفل الفرامل",
            C: "توصيل الكهرباء",
            D: "قياس السرعة"
        },
        correctAnswer: "A",
        explanation: "Equalizer bars help balance loads between wheelsets for smoother operation.",
        hint: "It improves weight distribution across the bogie.",
        arabicHint: "تحسن توزيع الوزن على البوجي."
    },
    {
        id: 31,
        question: "Secondary Suspension usually involves:",
        arabicQuestion: "يتضمن نظام التعليق الثانوي عادةً:",
        options: {
            A: "Small metal washers",
            B: "Components between the bogie frame and the vehicle body (e.g., air springs)",
            C: "The friction between the rail and wheel",
            D: "The seat cushions"
        },
        arabicOptions: {
            A: "غسالات معدنية صغيرة",
            B: "مكونات بين هيكل البوجي وجسم العربة مثل النوابض الهوائية",
            C: "الاحتكاك بين العجلة والقضيب",
            D: "وسائد المقاعد"
        },
        correctAnswer: "B",
        explanation: "Secondary suspension isolates passengers from vibration and improves ride comfort.",
        hint: "Passenger comfort mainly depends on this suspension stage.",
        arabicHint: "تعتمد راحة الركاب بشكل أساسي على هذه مرحلة التعليق."
    },
    {
        id: 32,
        question: "Air Suspension (Air Sprung Bogies) provide:",
        arabicQuestion: "ما الذي توفره أنظمة التعليق الهوائي؟",
        options: {
            A: "A much louder ride",
            B: "A constant floor height and better ride quality by adjusting air pressure",
            C: "Manual height control for the driver",
            D: "More sparks during braking"
        },
        arabicOptions: {
            A: "رحلة أكثر ضوضاء",
            B: "ثبات ارتفاع العربة وتحسين جودة الركوب",
            C: "تحكم يدوي في الارتفاع",
            D: "شرر أكثر أثناء الفرملة"
        },
        correctAnswer: "B",
        explanation: "Air springs automatically adjust pressure to maintain stable ride height and comfort.",
        hint: "The system adapts automatically to passenger load changes.",
        arabicHint: "يتكيف النظام تلقائياً مع تغييرات حمل الركاب."
    },
    {
        id: 33,
        question: "The 'Bogie Frame' is typically constructed by:",
        arabicQuestion: "كيف يتم تصنيع هيكل البوجي عادةً؟",
        options: {
            A: "Casting steel or welding steel plates",
            B: "Using solid blocks of wood",
            C: "Using aluminum foil",
            D: "Plastic injection molding"
        },
        arabicOptions: {
            A: "صب الفولاذ أو لحام ألواح فولاذية",
            B: "كتل خشبية",
            C: "رقائق ألومنيوم",
            D: "تشكيل البلاستيك"
        },
        correctAnswer: "A",
        explanation: "Bogie frames require strong steel construction to withstand heavy railway loads.",
        hint: "Durability and strength are essential for this structure.",
        arabicHint: "المتانة والقوة ضرورية لهذا الهيكل."
    },
    {
        id: 34,
        question: "What is the 'Wheel Flange'?",
        arabicQuestion: "ما هي حافة العجلة (Wheel Flange)؟",
        options: {
            A: "The part of the wheel that touches the top of the rail",
            B: "The projecting rim that prevents the wheel from running off the rail",
            C: "The axle itself",
            D: "The brake pad"
        },
        arabicOptions: {
            A: "الجزء الملامس لأعلى القضيب",
            B: "الحافة البارزة التي تمنع خروج العجلة من القضيب",
            C: "المحور نفسه",
            D: "بطانة الفرامل"
        },
        correctAnswer: "B",
        explanation: "Wheel flanges guide the wheelset and help prevent derailment.",
        hint: "It acts as a safety guide along the rail.",
        arabicHint: "تعمل كدليل أمان على طول القضيب."
    },
    {
        id: 35,
        question: "The 'Coning' of wheel treads helps the vehicle to:",
        arabicQuestion: "كيف يساعد الشكل المخروطي لسطح العجلة القطار؟",
        options: {
            A: "Stay centered on straight track and negotiate curves",
            B: "Slip more easily",
            C: "Stop faster",
            D: "Increase the weight of the train"
        },
        arabicOptions: {
            A: "الحفاظ على التمركز والتفاوض مع المنحنيات",
            B: "الانزلاق بسهولة",
            C: "التوقف أسرع",
            D: "زيادة الوزن"
        },
        correctAnswer: "A",
        explanation: "Coned wheel profiles assist self-centering and smooth curve negotiation.",
        hint: "Different rolling radii help the train move naturally through curves.",
        arabicHint: "نصف قطر دوران مختلفة تساعد القطار على الحركة الطبيعية عبر المنحنيات."
    },
    {
        id: 36,
        question: "When a train enters a curve, the wheel on the outer rail must:",
        arabicQuestion: "عند دخول القطار منحنى، يجب أن تقوم العجلة على القضيب الخارجي بـ:",
        options: {
            A: "Travel a shorter distance than the inner wheel",
            B: "Travel a longer distance than the inner wheel",
            C: "Stop rotating",
            D: "Reverse direction"
        },
        arabicOptions: {
            A: "قطع مسافة أقصر",
            B: "قطع مسافة أطول",
            C: "التوقف عن الدوران",
            D: "عكس الاتجاه"
        },
        correctAnswer: "B",
        explanation: "The outer rail has a larger curve radius, requiring the outer wheel to travel farther.",
        hint: "The outside path of a curve is always longer.",
        arabicHint: "المسار الخارجي للمنحنى دائماً أطول."
    },
    {
        id: 37,
        question: "Cast steel bogies are known for being:",
        arabicQuestion: "بماذا تتميز البوجيات المصنوعة من الفولاذ المصبوب؟",
        options: {
            A: "Fragile but light",
            B: "Heavy and extremely durable",
            C: "Flexible and soft",
            D: "Made of rubber"
        },
        arabicOptions: {
            A: "خفيفة وهشة",
            B: "ثقيلة ومتينة للغاية",
            C: "مرنة وناعمة",
            D: "مصنوعة من المطاط"
        },
        correctAnswer: "B",
        explanation: "Cast steel bogies are robust and designed for heavy-duty railway service.",
        hint: "Strength and durability are their key advantages.",
        arabicHint: "القوة والمتانة هي مزاياها الرئيسية."
    },
    {
        id: 38,
        question: "Rubber suspension (Chevrons) is often used because:",
        arabicQuestion: "لماذا يُستخدم التعليق المطاطي (Chevrons) كثيراً؟",
        options: {
            A: "It is cheaper than air",
            B: "It requires minimal maintenance and dampens high-frequency vibrations",
            C: "It can be eaten in emergencies",
            D: "It makes the wheels turn faster"
        },
        arabicOptions: {
            A: "أرخص من الهواء",
            B: "يحتاج صيانة قليلة ويمتص الاهتزازات العالية",
            C: "يمكن أكله في الطوارئ",
            D: "يجعل العجلات أسرع"
        },
        correctAnswer: "B",
        explanation: "Rubber suspension effectively absorbs vibration and requires little maintenance.",
        hint: "This material naturally dampens vibration.",
        arabicHint: "هذه المادة تمتص الاهتزاز بشكل طبيعي."
    },
    {
        id: 39,
        question: "The 'Axle Box' houses the:",
        arabicQuestion: "ماذا يحتوي صندوق المحور (Axle Box)؟",
        options: {
            A: "Brake handle",
            B: "Bearings that allow the axle to rotate under the load",
            C: "Passenger luggage",
            D: "Air conditioning refrigerant"
        },
        arabicOptions: {
            A: "مقبض الفرامل",
            B: "المحامل التي تسمح بدوران المحور",
            C: "أمتعة الركاب",
            D: "غاز التكييف"
        },
        correctAnswer: "B",
        explanation: "Axle box bearings support the axle and allow smooth wheel rotation.",
        hint: "These components reduce friction during movement.",
        arabicHint: "تقلل هذه المكونات الاحتكاك أثناء الحركة."
    },
    {
        id: 40,
        question: "'Hunting' refers to:",
        arabicQuestion: "إلى ماذا يشير مصطلح Hunting؟",
        options: {
            A: "The driver looking for a signal",
            B: "A lateral oscillation of the bogie at high speeds",
            C: "The process of coupling cars",
            D: "Checking for cracks in the rail"
        },
        arabicOptions: {
            A: "بحث السائق عن الإشارة",
            B: "اهتزاز جانبي للبوجي عند السرعات العالية",
            C: "عملية ربط العربات",
            D: "فحص تشققات القضيب"
        },
        correctAnswer: "B",
        explanation: "Hunting is a side-to-side oscillation that can occur at high speeds.",
        hint: "It affects vehicle stability during fast operation.",
        arabicHint: "يؤثر على استقرار المركبة أثناء التشغيل السريع."
    },
    {
        id: 41,
        question: "Standard railway wheels are pressed onto the:",
        arabicQuestion: "يتم كبس عجلات السكك الحديدية القياسية على:",
        options: {
            A: "Bogie frame",
            B: "Axle",
            C: "Body side",
            D: "Brake disc"
        },
        arabicOptions: {
            A: "هيكل البوجي",
            B: "المحور",
            C: "جانب العربة",
            D: "قرص الفرامل"
        },
        correctAnswer: "B",
        explanation: "Railway wheels are tightly fitted onto the axle for secure operation.",
        hint: "Both wheels rotate together through this component.",
        arabicHint: "كلا العجلتين تدوران معاً من خلال هذا المكون."
    },
    {
        id: 42,
        question: "In a 'Standard Rigid Bogie,' the distance between the two axles is called the:",
        arabicQuestion: "في البوجي الصلب القياسي، ماذا يسمى البعد بين المحورين؟",
        options: {
            A: "Track gauge",
            B: "Wheelbase",
            C: "Overhang",
            D: "Clearance"
        },
        arabicOptions: {
            A: "عرض السكة",
            B: "قاعدة العجلات",
            C: "البروز",
            D: "الخلوص"
        },
        correctAnswer: "B",
        explanation: "Wheelbase refers to the spacing between the bogie axles.",
        hint: "This dimension affects curve negotiation.",
        arabicHint: "هذا البعد يؤثر على معالجة المنحنيات."
    },
    {
        id: 43,
        question: "The 'Pivot' or 'Center Pin' of a bogie allows:",
        arabicQuestion: "ما وظيفة المحور المركزي أو Center Pin في البوجي؟",
        options: {
            A: "The wheels to fall off",
            B: "The bogie to rotate relative to the vehicle body",
            C: "The train to split in half",
            D: "The air to flow to the brakes"
        },
        arabicOptions: {
            A: "سقوط العجلات",
            B: "دوران البوجي بالنسبة لجسم العربة",
            C: "انقسام القطار",
            D: "مرور الهواء للفرامل"
        },
        correctAnswer: "B",
        explanation: "The center pin enables bogie rotation while negotiating curves.",
        hint: "This movement is essential for smooth turning.",
        arabicHint: "هذه الحركة ضرورية للدوران السلس."
    },
    {
        id: 44,
        question: "What happens to an air spring if the load on the coach increases?",
        arabicQuestion: "ماذا يحدث للنابض الهوائي عند زيادة حمل العربة؟",
        options: {
            A: "It deflates completely",
            B: "The leveling valve adds more air to maintain the ride height",
            C: "It turns into a steel spring",
            D: "It explodes"
        },
        arabicOptions: {
            A: "يفرغ بالكامل",
            B: "يضيف صمام التسوية مزيداً من الهواء",
            C: "يتحول إلى نابض فولاذي",
            D: "ينفجر"
        },
        correctAnswer: "B",
        explanation: "Air suspension systems automatically adjust pressure to maintain constant height.",
        hint: "The system compensates automatically for passenger load.",
        arabicHint: "يعوض النظام بشكل تلقائي عن حمل الركاب."
    },
    {
        id: 45,
        question: "'Dampers' (Shock absorbers) are used in suspension to:",
        arabicQuestion: "ما وظيفة المخمدات (Shock Absorbers) في نظام التعليق؟",
        options: {
            A: "Increase the bounce",
            B: "Dissipate energy and stop excessive vibration",
            C: "Add weight to the train",
            D: "Lubricate the springs"
        },
        arabicOptions: {
            A: "زيادة الاهتزاز",
            B: "تبديد الطاقة ومنع الاهتزاز الزائد",
            C: "زيادة الوزن",
            D: "تشحيم النوابض"
        },
        correctAnswer: "B",
        explanation: "Dampers absorb oscillation energy and stabilize suspension movement.",
        hint: "Without them, the vehicle would continue bouncing.",
        arabicHint: "بدونها، ستستمر المركبة بالارتداد."
    },
    {
        id: 46,
        question: "What is 'Track Gauge'?",
        arabicQuestion: "ما هو عرض السكة (Track Gauge)؟",
        options: {
            A: "The height of the rail",
            B: "The distance between the inner faces of the two rails",
            C: "The length of the train",
            D: "The weight of the locomotive"
        },
        arabicOptions: {
            A: "ارتفاع القضيب",
            B: "المسافة بين الوجهين الداخليين للقضيبين",
            C: "طول القطار",
            D: "وزن الجرار"
        },
        correctAnswer: "B",
        explanation: "Track gauge defines the spacing between the rails.",
        hint: "This measurement determines railway compatibility.",
        arabicHint: "هذا القياس يحدد طاقة السكك الحديدية."
    },
    {
        id: 47,
        question: "On curved track, 'Super-elevation' (Cant) is:",
        arabicQuestion: "ما المقصود بالميل الفوقي (Super-elevation) في المنحنيات؟",
        options: {
            A: "Raising the inner rail higher than the outer rail",
            B: "Raising the outer rail higher than the inner rail",
            C: "Removing the rails",
            D: "Making the rails wider"
        },
        arabicOptions: {
            A: "رفع القضيب الداخلي",
            B: "رفع القضيب الخارجي",
            C: "إزالة القضبان",
            D: "توسيع القضبان"
        },
        correctAnswer: "B",
        explanation: "Cant reduces lateral forces by elevating the outer rail on curves.",
        hint: "It helps trains maintain stability at speed.",
        arabicHint: "يساعد القطارات على الحفاظ على الاستقرار عند السرعة."
    },
    {
        id: 48,
        question: "A 'Steerable Bogie' reduces:",
        arabicQuestion: "ما الذي يقلله البوجي القابل للتوجيه؟",
        options: {
            A: "Fuel consumption only",
            B: "Noise and rail/flange wear in tight curves",
            C: "The number of seats in a coach",
            D: "The need for a driver"
        },
        arabicOptions: {
            A: "استهلاك الوقود فقط",
            B: "الضوضاء وتآكل القضبان وحواف العجلات",
            C: "عدد المقاعد",
            D: "الحاجة إلى سائق"
        },
        correctAnswer: "B",
        explanation: "Better wheel alignment reduces wear and noise during curve negotiation.",
        hint: "Improved steering means smoother curve performance.",
        arabicHint: "التوجيه المحسّن يعني تمريراً أسلس عبر المنحنيات."
    },
    {
        id: 49,
        question: "'Auxiliary Electrical Equipment' generally handles:",
        arabicQuestion: "ما الذي تتعامل معه المعدات الكهربائية المساعدة عادةً؟",
        options: {
            A: "Only the movement of the train",
            B: "Lighting, heating, ventilation, and battery charging",
            C: "The track signals",
            D: "The station elevators"
        },
        arabicOptions: {
            A: "حركة القطار فقط",
            B: "الإضاءة والتدفئة والتهوية وشحن البطاريات",
            C: "إشارات السكة",
            D: "مصاعد المحطات"
        },
        correctAnswer: "B",
        explanation: "Auxiliary systems support passenger comfort and onboard electrical needs.",
        hint: "These systems are not directly related to traction.",
        arabicHint: "هذه الأنظمة غير مرتبطة مباشرة بالجر."
    },
    {
        id: 50,
        question: "The 'Generator' on older coaches was often driven by:",
        arabicQuestion: "بماذا كان يتم تشغيل المولد في العربات القديمة غالباً؟",
        options: {
            A: "A belt or pulley from the axle",
            B: "Wind power",
            C: "The passengers pedaling",
            D: "A small wood fire"
        },
        arabicOptions: {
            A: "سير أو بكرة متصلة بالمحور",
            B: "طاقة الرياح",
            C: "الركاب بالدواسات",
            D: "نار خشبية صغيرة"
        },
        correctAnswer: "A",
        explanation: "Older coach generators were mechanically driven from the rotating axle.",
        hint: "The wheel movement supplied the mechanical drive.",
        arabicHint: "حركة العجلة أمدت بالقيادة الميكانيكية."
    },
    {
        id: 51,
        question: "The Buckeye (Janney) coupler is characterized by a 'knuckle' shape and is the standard for modern heavy-haul and passenger trains.",
        arabicQuestion: "قارن Buckeye (Janney) يتميز بشكل الفك (Knuckle) ويُعد معياراً في قطارات الشحن الثقيلة والركاب الحديثة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "The Janney (Buckeye) coupler uses an automatic knuckle mechanism widely used in modern rail systems.",
        hint: "Think of the standard automatic coupler used in modern railways.",
        arabicHint: "فكر في القارن التلقائي المعياري المستخدم في السكك الحديثة الحديثة."
    },
    {
        id: 52,
        question: "In a 'Screw Coupler' arrangement, the drawbar is primarily used to absorb the pushing forces between coaches.",
        arabicQuestion: "في نظام القارن اللولبي، يُستخدم قضيب السحب (Drawbar) أساساً لامتصاص قوى الدفع بين العربات.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Side buffers absorb compressive (pushing) forces, not the drawbar.",
        hint: "Buffers handle compression forces, not the drawbar.",
        arabicHint: "المخزنات تتعامل مع قوى الضغط، وليس قضيب السحب."
    },
    {
        id: 53,
        question: "Plug doors are designed to be flush with the bodyside when closed and move outwards before sliding parallel to the coach.",
        arabicQuestion: "أبواب Plug Door تكون مستوية مع جسم العربة ثم تتحرك للخارج قبل الانزلاق جانبياً.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Plug doors improve sealing by moving outward before sliding sideways.",
        hint: "This design improves insulation and noise reduction.",
        arabicHint: "هذا التصميم يحسن العزل وتقليل الضوضاء."
    },
    {
        id: 54,
        question: "Slam doors are primarily distinguished by being operated by compressed air and sliding into a recess within the wall.",
        arabicQuestion: "أبواب Slam Door تعمل بالهواء المضغوط وتنزلق داخل الجدار.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Slam doors are manual hinged doors, not sliding or air operated.",
        hint: "They are old-style manually operated doors.",
        arabicHint: "إنها أبواب قديمة يتم تشغيلها يدويًا."
    },
    {
        id: 55,
        question: "A 'Sliding Pocket Door' is unique because it slides into a cavity (pocket) within the coach wall structure.",
        arabicQuestion: "باب Sliding Pocket Door ينزلق داخل تجويف داخل جدار العربة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Pocket doors disappear inside the wall when opened.",
        hint: "The door becomes hidden inside the body structure.",
        arabicHint: "الباب يختفي داخل هيكل الجسم."
    },
    {
        id: 56,
        question: "In a split air-conditioned coach, the 'evaporator' is typically responsible for releasing heat to the outside environment.",
        arabicQuestion: "في عربة مكيفة، المبخر مسؤول عن طرد الحرارة للخارج.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "The evaporator absorbs heat; the condenser releases heat.",
        hint: "Think: evaporator = cooling side.",
        arabicHint: "فكر: المبخر = جانب التبريد."
    },
    {
        id: 57,
        question: "The primary purpose of a 'Bar Coupler' is to provide a quick-release mechanism for frequent shunting operations.",
        arabicQuestion: "الهدف الأساسي للقارن القضباني هو توفير فصل سريع لعمليات المناورة المتكررة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Bar couplers are semi-permanent and not intended for frequent uncoupling.",
        hint: "They are used for fixed formations.",
        arabicHint: "تستخدم لتشكيلات ثابتة."
    },
    {
        id: 58,
        question: "A Scharfenberg Coupler is fully automatic, connecting mechanical, pneumatic, and electrical lines simultaneously.",
        arabicQuestion: "قارن Scharfenberg يعمل أوتوماتيكياً ويصل بين الميكانيكا والهواء والكهرباء معاً.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Scharfenberg couplers are fully automatic multi-connection systems.",
        hint: "Used in modern passenger trains.",
        arabicHint: "تستخدم في قطارات الركاب الحديثة."
    },
    {
        id: 59,
        question: "In a coach heating system, convection heaters are usually located near the ceiling for maximum efficiency.",
        arabicQuestion: "سخانات الحمل الحراري توضع عادةً قرب السقف لزيادة الكفاءة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Heaters are placed near the floor so warm air rises naturally.",
        hint: "Hot air rises upward.",
        arabicHint: "الهواء الساخن يرتفع للأعلى."
    },
    {
        id: 60,
        question: "The 'Link and Pin' coupler is rarely used today because it is highly dangerous for staff during the coupling process.",
        arabicQuestion: "قارن Link and Pin نادر الاستخدام اليوم لأنه خطير أثناء التشغيل.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "It required manual intervention and caused many accidents historically.",
        hint: "Old coupling system with safety risks.",
        arabicHint: "نظام قارن قديم مع مخاطر أمان."
    },
    {
        id: 61,
        question: "The primary function of an 'Alternator' on a diesel locomotive is to store electrical energy for emergency braking.",
        arabicQuestion: "وظيفة المولد في الجرار هي تخزين الطاقة للفرملة الطارئة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Alternators generate electricity; batteries store it.",
        hint: "Generation vs storage.",
        arabicHint: "التوليد مقابل التخزين."
    },
    {
        id: 62,
        question: "A step-down transformer is used to convert high voltage from the catenary to low voltage for onboard systems.",
        arabicQuestion: "المحول الخافض يحول الجهد العالي إلى منخفض داخل القطار.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Transformers reduce HV to usable LV for onboard equipment.",
        hint: "Voltage conversion system.",
        arabicHint: "نظام تحويل الجهد."
    },
    {
        id: 63,
        question: "The main reservoir in an air system is primarily used to filter compressed air for the driver.",
        arabicQuestion: "الخزان الرئيسي يقوم بتصفية الهواء للسائق.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "The main reservoir stores compressed air; it does not filter it.",
        hint: "Storage, not filtration.",
        arabicHint: "تخزين وليس تصفية."
    },
    {
        id: 64,
        question: "A reciprocating compressor uses pistons moving in cylinders to compress air.",
        arabicQuestion: "الضاغط الترددي يستخدم مكابس داخل أسطوانات لضغط الهواء.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Piston movement compresses air in a reciprocating compressor.",
        hint: "Piston-based compression.",
        arabicHint: "ضغط قائم على المكابس."
    },
    {
        id: 65,
        question: "On many systems, the pantograph is an air-operated auxiliary component.",
        arabicQuestion: "البانتوجراف يعمل بالهواء المضغوط في كثير من الأنظمة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Pneumatic systems raise and lower the pantograph.",
        hint: "Air pressure controls it.",
        arabicHint: "ضغط الهواء يتحكم به."
    },
    {
        id: 66,
        question: "The Motor Generator set is primarily used to increase the speed of the locomotive.",
        arabicQuestion: "مجموعة Motor Generator تستخدم لزيادة سرعة القطار.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "It converts electrical power, not speed.",
        hint: "Energy conversion, not propulsion.",
        arabicHint: "تحويل الطاقة وليس الدفع."
    },
    {
        id: 67,
        question: "Air dryers remove moisture from compressed air to prevent corrosion and freezing.",
        arabicQuestion: "مجففات الهواء تزيل الرطوبة لمنع التآكل والتجمد.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Dry air improves reliability of pneumatic systems.",
        hint: "Moisture causes system failure.",
        arabicHint: "الرطوبة تسبب فشل النظام."
    },
    {
        id: 68,
        question: "A rotary compressor is often driven mechanically by the diesel engine.",
        arabicQuestion: "الضاغط الدوار يُدار ميكانيكياً بواسطة محرك الديزل.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Rotary compressors are engine-driven in many locomotives.",
        hint: "Mechanical drive connection.",
        arabicHint: "توصيل القيادة الميكانيكية."
    },
    {
        id: 69,
        question: "The auxiliary compressor is specifically used to provide the main braking force for the entire train.",
        arabicQuestion: "الضاغط المساعد مسؤول عن قوة الفرملة الرئيسية للقطار.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Main compressors handle braking; auxiliary supports small systems.",
        hint: "Support system, not main braking.",
        arabicHint: "نظام دعم وليس فرملة رئيسية."
    },
    {
        id: 70,
        question: "Electronic converters have largely replaced older motor-generator sets in modern rolling stock.",
        arabicQuestion: "المحولات الإلكترونية استبدلت أنظمة Motor-Generator القديمة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Modern systems use solid-state converters instead of rotating machines.",
        hint: "Solid-state vs mechanical systems.",
        arabicHint: "نظم الحالة الصلبة مقابل الأنظمة الميكانيكية."
    },
    {
        id: 71,
        question: "The contact strip of the pantograph is the part that touches the overhead wire.",
        arabicQuestion: "شريط التلامس في البانتوجراف هو الجزء الذي يلامس السلك العلوي.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "The contact strip collects electrical power from the overhead line.",
        hint: "It is the interface with the catenary.",
        arabicHint: "إنها الواجهة مع السلك العلوي."
    },
    {
        id: 72,
        question: "On-board batteries are primarily intended to power traction motors during high-speed travel.",
        arabicQuestion: "البطاريات تغذي محركات الجر أثناء السرعات العالية.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Batteries power auxiliary systems, not traction motors.",
        hint: "They handle lighting and control systems.",
        arabicHint: "تتعامل مع الإضاءة والأنظمة التحكمية."
    },
    {
        id: 73,
        question: "A Static Inverter converts DC power to AC power using solid-state electronics.",
        arabicQuestion: "العاكس الثابت يحول DC إلى AC باستخدام إلكترونيات الحالة الصلبة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Static inverters are modern semiconductor-based converters.",
        hint: "No rotating parts involved.",
        arabicHint: "لا توجد أجزاء دوارة متضمنة."
    },
    {
        id: 74,
        question: "Gaps in the third rail require the train to rely on onboard converters or batteries for auxiliary power.",
        arabicQuestion: "الفجوات في السكة الثالثة تجعل القطار يعتمد على البطاريات أو المحولات الداخلية.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Power gaps require onboard energy storage or conversion systems.",
        hint: "Temporary loss of external supply.",
        arabicHint: "فقدان مؤقت للإمداد الخارجي."
    },
    {
        id: 75,
        question: "The low voltage system on a train typically operates at 25,000V AC.",
        arabicQuestion: "نظام الجهد المنخفض يعمل عادة عند 25,000 فولت AC.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "25kV is high voltage used for traction, not low voltage systems.",
        hint: "LV is much lower than traction voltage.",
        arabicHint: "الجهد المنخفض أقل بكثير من جهد الجر."
    },
    {
        id: 76,
        question: "The primary role of the 'Bogie' (Truck) is to support the vehicle body and guide the wheels along the track.",
        arabicQuestion: "الدور الأساسي للبوجي هو دعم جسم العربة وتوجيه العجلات على السكة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "The bogie carries the coach body and ensures stable guidance along the rails.",
        hint: "It is the main wheel-supporting structure.",
        arabicHint: "إنها الهيكل الرئيسي الداعم للعجلات."
    },
    {
        id: 77,
        question: "A 'Rigid Bogie' on a curved track is less likely to experience flange wear compared to a steerable bogie.",
        arabicQuestion: "البوجي الصلب أقل عرضة لتآكل الحواف في المنحنيات مقارنة بالبوجي القابل للتوجيه.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Rigid bogies experience higher flange wear due to fixed geometry on curves.",
        hint: "Steerable designs reduce curve friction.",
        arabicHint: "التصاميم القابلة للتوجيه تقلل احتكاك المنحنيات."
    },
    {
        id: 78,
        question: "In a 'Steerable Bogie,' the wheelsets can adjust their angle to align more closely with the radius of a curve.",
        arabicQuestion: "في البوجي القابل للتوجيه يمكن للعجلات تعديل زاويتها لتناسب المنحنيات.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Steerable bogies improve curve negotiation by aligning wheelsets with track geometry.",
        hint: "Better alignment = less wear.",
        arabicHint: "التوافق الأفضل = تآكل أقل."
    },
    {
        id: 79,
        question: "Primary Suspension is located between the axle box and the bogie frame.",
        arabicQuestion: "التعليق الأولي يقع بين صندوق المحور وهيكل البوجي.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Primary suspension absorbs shocks from wheel-rail interaction.",
        hint: "Closest suspension stage to wheels.",
        arabicHint: "أقرب مرحلة تعليق إلى العجلات."
    },
    {
        id: 80,
        question: "The function of the 'Equalizer Bar' in older bogies is to connect the electrical systems of the two axles.",
        arabicQuestion: "وظيفة قضيب الموازنة هي توصيل الأنظمة الكهربائية بين المحورين.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Equalizer bars distribute mechanical load, not electrical connections.",
        hint: "It balances weight, not electricity.",
        arabicHint: "يوازن الوزن وليس الكهرباء."
    },
    {
        id: 81,
        question: "Secondary Suspension involves components located between the bogie frame and the vehicle body.",
        arabicQuestion: "التعليق الثانوي يقع بين هيكل البوجي وجسم العربة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Secondary suspension improves passenger comfort by isolating vibrations.",
        hint: "It is above the bogie frame.",
        arabicHint: "يقع فوق هيكل البوجي."
    },
    {
        id: 82,
        question: "Air Suspension systems provide a constant floor height by automatically adjusting air pressure.",
        arabicQuestion: "أنظمة التعليق الهوائي تحافظ على ارتفاع ثابت للعربة عبر ضبط ضغط الهواء.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Air springs self-adjust to maintain ride height regardless of load.",
        hint: "Load compensation system.",
        arabicHint: "نظام تعويض الحمل."
    },
    {
        id: 83,
        question: "Modern Bogie Frames are typically constructed using solid blocks of wood for better damping.",
        arabicQuestion: "هيكل البوجي الحديث يصنع من كتل خشبية صلبة لتحسين امتصاص الاهتزاز.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Modern bogies are made from fabricated or cast steel for strength and durability.",
        hint: "Wood is not used in modern railway bogies.",
        arabicHint: "الخشب لا يُستخدم في البوجيات الحديثة."
    },
    {
        id: 84,
        question: "The Wheel Flange is the projecting rim that prevents the wheel from running off the rail.",
        arabicQuestion: "حافة العجلة تمنع خروج العجلة من السكة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Flanges guide wheels and prevent derailment.",
        hint: "Safety guiding component.",
        arabicHint: "مكون توجيه أمان."
    },
    {
        id: 85,
        question: "The Coning of wheel treads helps the vehicle stay centered on straight track.",
        arabicQuestion: "الشكل المخروطي للعجلات يساعد القطار على البقاء في المنتصف على الخط المستقيم.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Conical wheel profiles help self-centering on straight tracks.",
        hint: "Wheel geometry stabilizes motion.",
        arabicHint: "هندسة العجلة تثبت الحركة."
    },
    {
        id: 86,
        question: "When a train enters a curve, the outer wheel must travel a longer distance than the inner wheel.",
        arabicQuestion: "في المنحنى، العجلة الخارجية تقطع مسافة أطول من الداخلية.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Outer rail has a larger radius, so it covers more distance.",
        hint: "Outer path is longer in curves.",
        arabicHint: "المسار الخارجي أطول في المنحنيات."
    },
    {
        id: 87,
        question: "Cast steel bogies are known for being fragile and requiring frequent replacement.",
        arabicQuestion: "البوجيات المصنوعة من الفولاذ المصبوب ضعيفة وتحتاج تغيير متكرر.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Cast steel bogies are extremely strong and durable.",
        hint: "They are built for heavy-duty service.",
        arabicHint: "مصنوعة للخدمة الثقيلة."
    },
    {
        id: 88,
        question: "Rubber suspension (Chevrons) is used because it requires no maintenance and dampens high-frequency vibrations.",
        arabicQuestion: "التعليق المطاطي يُستخدم لأنه قليل الصيانة ويمتص الاهتزازات العالية.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Rubber elements provide vibration damping with minimal maintenance.",
        hint: "Elastic material = vibration absorption.",
        arabicHint: "المادة المرنة = امتصاص الاهتزاز."
    },
    {
        id: 89,
        question: "The Axle Box houses the bearings that allow the axle to rotate under load.",
        arabicQuestion: "صندوق المحور يحتوي على المحامل التي تسمح بدوران المحور.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Axle boxes support and house wheel bearings.",
        hint: "It reduces friction during rotation.",
        arabicHint: "يقلل الاحتكاك أثناء الدوران."
    },
    {
        id: 90,
        question: "In railway terms, 'Hunting' refers to lateral oscillation of a bogie at high speeds.",
        arabicQuestion: "مصطلح Hunting يشير إلى اهتزاز جانبي للبوجي عند السرعات العالية.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Hunting is unstable side-to-side motion at high speed.",
        hint: "It affects stability.",
        arabicHint: "يؤثر على الاستقرار."
    },
    {
        id: 91,
        question: "Standard railway wheels are pressed onto the axle using immense hydraulic force.",
        arabicQuestion: "يتم تركيب العجلات على المحور باستخدام ضغط هيدروليكي عالي.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Wheels are press-fitted onto axles for secure attachment.",
        hint: "Interference fit process.",
        arabicHint: "عملية ملاءمة التداخل."
    },
    {
        id: 92,
        question: "In a Standard Rigid Bogie, the distance between the two axles is called the 'Clearance'.",
        arabicQuestion: "المسافة بين المحورين في البوجي الصلب تسمى Clearance.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "It is called wheelbase, not clearance.",
        hint: "Correct term = wheelbase.",
        arabicHint: "المصطلح الصحيح = قاعدة العجلات."
    },
    {
        id: 93,
        question: "The Pivot or Center Pin of a bogie allows the bogie to rotate relative to the vehicle body.",
        arabicQuestion: "المحور المركزي يسمح للبوجي بالدوران بالنسبة لجسم العربة.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "It enables smooth turning of the bogie under the coach.",
        hint: "Rotation point connection.",
        arabicHint: "نقطة اتصال الدوران."
    },
    {
        id: 94,
        question: "If the load on a coach increases, the leveling valve in an air spring system adds more air to maintain ride height.",
        arabicQuestion: "عند زيادة الحمل، صمام التسوية يضيف هواء للحفاظ على الارتفاع.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Leveling valves adjust air pressure automatically.",
        hint: "Self-leveling system.",
        arabicHint: "نظام التسوية الذاتية."
    },
    {
        id: 95,
        question: "Dampers (Shock absorbers) are used in suspension to dissipate energy and prevent excessive vibration.",
        arabicQuestion: "المخمدات تستخدم لتبديد الطاقة ومنع الاهتزاز الزائد.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Dampers control oscillations in suspension systems.",
        hint: "They reduce bouncing.",
        arabicHint: "تقلل من الارتداد."
    },
    {
        id: 96,
        question: "Track Gauge is defined as the height of the rail from the ground.",
        arabicQuestion: "عرض السكة هو ارتفاع القضيب عن الأرض.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "Track gauge is the distance between inner rail faces.",
        hint: "It is a horizontal measurement.",
        arabicHint: "إنه قياس أفقي."
    },
    {
        id: 97,
        question: "Super-elevation (Cant) involves raising the outer rail higher than the inner rail on curves.",
        arabicQuestion: "الميل الفوقي يعني رفع القضيب الخارجي أعلى من الداخلي.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Cant reduces lateral forces on curves.",
        hint: "Outer rail is higher.",
        arabicHint: "القضيب الخارجي أعلى."
    },
    {
        id: 98,
        question: "A Steerable Bogie is primarily designed to increase the number of seats available in a coach.",
        arabicQuestion: "البوجي القابل للتوجيه يهدف لزيادة عدد المقاعد.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "B",
        explanation: "It improves curve performance and reduces wear, not seating capacity.",
        hint: "It is about dynamics, not seating.",
        arabicHint: "يتعلق بالديناميكا وليس بالجلوس."
    },
    {
        id: 99,
        question: "Auxiliary Electrical Equipment generally handles lighting, heating, ventilation, and battery charging.",
        arabicQuestion: "المعدات الكهربائية المساعدة تشمل الإضاءة والتدفئة والتهوية والشحن.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Auxiliary systems support passenger comfort and onboard services.",
        hint: "Non-traction electrical systems.",
        arabicHint: "أنظمة كهربائية غير متعلقة بالجر."
    },
    {
        id: 100,
        question: "The Generator on older coaches was often driven by a belt or pulley connected to the axle.",
        arabicQuestion: "المولد في العربات القديمة كان يُدار بواسطة سير متصل بالمحور.",
        options: {
            A: "True",
            B: "False"
        },
        arabicOptions: {
            A: "صح",
            B: "خطأ"
        },
        correctAnswer: "A",
        explanation: "Axle-driven belt systems were common in older rolling stock.",
        hint: "Mechanical drive from wheel rotation.",
        arabicHint: "القيادة الميكانيكية من دوران العجلات."
    }
]);

const quizzes = [quizData2Normalized, quizDataMain].filter(q => q.length > 0);
let currentQuizIndex = 0;
let quizData = quizzes[currentQuizIndex];

let index = 0;
let userAnswers = new Array(quizData.length).fill(null);

const beboMessages = {
    intro: ["مرحبا اسمي بيبو جاهز لبدء الاختبار؟"],
    correct: [
        "عاش يا وحش! أداء أسطوري.", "الله ينور عليك، تركيزك في السما!", "ممتاز! كمل يا بطل بنفس الحماس.",
        "وحش! إجابة فنية مية مية.", "رائع، أنت فاهم اللعبة كويس جداً.", "برافو! إجابة أسطورية زي ما توقعت.",
        "عاش يا دحيح، مجهودك جبار.", "تسلم إيدك، إجابة مظبوطة بالملي.", "أحسنت! فخور بيك فعلاً يا وحش."
    ],
    wrong: [
        "غلط تماماً! ركز بقى عشان كدة كتير أوي!",
        "إيه العك ده؟ فوق كدة واقرأ السؤال كويس يا هندسة!",
        "إجابة كارثية! راجع معلوماتك فوراً كدة مينفعش!",
        "غلط! أنت بتهزر ولا إيه؟ ركز بقى شوية!"
    ],
    resultsAdvice: [
        "نتيجتك دى يسطا ولا درجه حراره.",
        "منت لو تبص على التلميحات وانت بتحل مكنتش جبت درجات الحراره دى.",
        "تعي اشب شاى يسطا بالى انت عامله ده.",
        "متزعلش مش مهم درجتك فى الامتحان المهم الصحه والستر.",
        "هيجى شخص يحسسك انك ف كفه والكون كله فى كفه وبعدين يسقفلك بالكفتين على وشك علشان النتيجه الى انت جايبها دى."
    ],
    resultsSuccess: [
        "مشاء الله عليك ",
        "هايل بجد عاش عليك.",
        "شيئ جميل جدا عندك احسن منكده كمان  عاش عليك  ."
    ]
};

function setBebo(state, category, specificIdx = -1) {
    // Bebo robot disabled - only results messages will be shown
    return;
}

function toggleHint() { document.getElementById('hint-panel').classList.toggle('active'); }

function init() {
    if (quizzes.length === 0) {
        document.getElementById('quiz-ui').classList.add('hidden');
        document.getElementById('results-ui').classList.remove('hidden');
        document.getElementById('final-pct').innerText = '0%';
        document.getElementById('final-feedback').innerText = 'لا توجد بيانات اختبار متاحة.';
        return;
    }
    setCurrentQuiz(0);
    document.querySelector('.bebo-wrapper').classList.add('hidden');
    render();
}

function setCurrentQuiz(quizIndex) {
    currentQuizIndex = quizIndex;
    quizData = quizzes[currentQuizIndex];
    index = 0;
    userAnswers = new Array(quizData.length).fill(null);
    document.getElementById('total-idx').innerText = quizData.length.toString().padStart(2, '0');
}

function render() {
    const data = quizData[index];
    document.getElementById('current-idx').innerText = (index + 1).toString().padStart(2, '0');

    document.getElementById('question-text').innerHTML = `
        <div class="q-en-main">${data.question}</div>
        <div class="q-ar-box">${data.arabicQuestion}</div>
    `;

    document.getElementById('hint-text').innerHTML = `
        <div class="hint-info">${data.hint}</div>
        <div class="hint-extra">${data.arabicHint || ''}</div>
    `;

    document.getElementById('hint-panel').classList.remove('active');

    const container = document.getElementById('options-container');
    container.innerHTML = '';
    const answered = userAnswers[index] !== null;

    document.getElementById('btn-next').disabled = !answered;
    document.getElementById('btn-next').innerText = (index === quizData.length - 1) ? "FINALIZE" : "NEXT";
    document.getElementById('btn-prev').disabled = index === 0;

    const btnSkip = document.getElementById('btn-skip');
    if (answered) {
        btnSkip.classList.add('hidden');
    } else {
        btnSkip.classList.remove('hidden');
        btnSkip.innerText = "SKIP";
    }

    container.className = "options-grid";
    Object.entries(data.options).forEach(([key, opt]) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <div class="option-main">
                <span class="char-idx">${key}</span>
                <span>${opt}</span>
            </div>
            <div class="option-translation">${data.arabicOptions[key]}</div>
        `;
        if (answered) {
            btn.disabled = true;
            if (key === data.correctAnswer) btn.classList.add('correct');
            if (userAnswers[index] === key && key !== data.correctAnswer) btn.classList.add('wrong');
        } else {
            btn.onclick = () => select(key);
        }
        container.appendChild(btn);
    });
    const percentage = Math.round((index + 1) / quizData.length * 100);
    document.getElementById('progress-text').textContent = percentage + '%';
    
    // Update circular progress
    const circumference = 283; // 2 * PI * 45
    const offset = circumference - (percentage / 100) * circumference;
    document.getElementById('progress-circle-fill').style.strokeDashoffset = offset;
}

function select(choice) {
    if (userAnswers[index] !== null) return;
    userAnswers[index] = choice;
    const correct = choice === quizData[index].correctAnswer;
    setBebo(correct ? 'success' : 'error', correct ? 'correct' : 'wrong', index);
    render();
}

function move(dir) {
    if (dir === 1 && index === quizData.length - 1) { finish(); }
    else { index += dir; render(); }
}

function finish() {
    document.getElementById('quiz-ui').classList.add('hidden');
    document.getElementById('results-ui').classList.remove('hidden');
    document.querySelector('.bebo-wrapper').classList.add('hidden');
    const score = userAnswers.filter((a, i) => a === quizData[i].correctAnswer).length;
    const pct = Math.round(score / quizData.length * 100);
    document.getElementById('final-pct').innerText = pct + '%';
    const fb = document.getElementById('final-feedback');
    const category = pct >= 85 ? 'resultsSuccess' : 'resultsAdvice';
    fb.innerText = beboMessages[category][Math.floor(Math.random() * beboMessages[category].length)];

    const failAudio2 = document.getElementById('audio-fail2');
    const successAudio = document.getElementById('audio-success');
    if (pct >= 80) {
        successAudio?.play().catch(() => {});
    } else {
        failAudio2?.play().catch(() => {});
    }

    const actionBtn = document.getElementById('results-action');
    if (currentQuizIndex < quizzes.length - 1) {
        actionBtn.innerText = 'CONTINUE TO NEXT QUIZ';
        actionBtn.onclick = startNextQuiz;
    } else {
        actionBtn.innerText = 'RESTART ASSESSMENT';
        actionBtn.onclick = () => location.reload();
    }
}

function startNextQuiz() {
    setCurrentQuiz(currentQuizIndex + 1);
    document.getElementById('results-ui').classList.add('hidden');
    document.getElementById('quiz-ui').classList.remove('hidden');
    render();
}

window.onload = init;
