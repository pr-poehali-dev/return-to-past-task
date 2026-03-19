import { useState } from "react";
import Icon from "@/components/ui/icon";

const LAWYER_PHOTO = "https://cdn.poehali.dev/projects/def78d0b-7610-4e89-a200-4a914aa8cb3b/bucket/d617b17d-8a33-4d47-b407-412b9c2c2984.jpg";

const navItems = [
  { id: "about", label: "Обо мне" },
  { id: "services", label: "Услуги" },
  { id: "experience", label: "Опыт" },
  { id: "analysis", label: "Анализ" },
  { id: "results", label: "Результаты" },
  { id: "reviews", label: "Отзывы" },
  { id: "articles", label: "Статьи" },
  { id: "consultation", label: "Консультация" },
  { id: "contacts", label: "Контакты" },
];

const services = [
  { icon: "Shield", title: "Защита на следствии", desc: "Полное сопровождение с момента задержания. Защита прав на допросах, очных ставках, обысках." },
  { icon: "Scale", title: "Защита в суде", desc: "Профессиональное представление интересов в суде первой инстанции, апелляции и кассации." },
  { icon: "FileText", title: "Обжалование приговора", desc: "Подготовка апелляционных и кассационных жалоб. Восстановление справедливости." },
  { icon: "Lock", title: "Меры пресечения", desc: "Добиваемся освобождения под залог или подписку о невыезде вместо заключения под стражу." },
  { icon: "Users", title: "Защита бизнеса", desc: "Экономические преступления, мошенничество, налоговые дела. Защита предпринимателей." },
  { icon: "Eye", title: "Конфиденциальность", desc: "Полная тайна адвокатской деятельности. Ваши данные надёжно защищены." },
];

const results = [
  { number: "150+", label: "Дел защищено" },
  { number: "87%", label: "Оправдательных приговоров или прекращений дел" },
  { number: "18", label: "Лет практики" },
  { number: "60+", label: "Клиентов вышли на свободу" },
];

const cases = [
  { category: "Экономические преступления", result: "Прекращено дело", desc: "Обвинение в мошенничестве на 45 млн руб. — дело прекращено за отсутствием состава преступления." },
  { category: "Тяжкие преступления", result: "Переквалификация", desc: "Ч. 1 ст. 105 УК РФ переквалифицирована на ст. 109 УК РФ. Срок снижен с 12 до 2 лет." },
  { category: "Наркотики", result: "Оправдательный приговор", desc: "Обвинение по ст. 228.1 УК РФ. Полное оправдание при наличии прямых улик." },
  { category: "Налоговые преступления", result: "Прекращено дело", desc: "Уголовное дело по ст. 199 УК РФ прекращено. Клиент избежал реального срока." },
];

const reviews = [
  { name: "Сергей М.", text: "Адвокат добился прекращения дела, которое казалось безнадёжным. Профессионал высочайшего уровня. Рекомендую без оговорок.", stars: 5 },
  { name: "Елена К.", text: "В самый тяжёлый период жизни он стал настоящей опорой. Дело в суде выиграли, муж вернулся домой. Вечная благодарность.", stars: 5 },
  { name: "Андрей В.", text: "Благодаря его работе переквалифицировали обвинение и снизили срок вдвое. Чёткий, честный, результативный.", stars: 5 },
];

const articles = [
  { date: "12 марта 2026", title: "Как вести себя при задержании: 7 правил, которые защитят вас", tag: "Права задержанного" },
  { date: "28 февраля 2026", title: "Обыск в вашем доме: что законно, а что нет", tag: "Следственные действия" },
  { date: "10 февраля 2026", title: "Экономические преступления в 2026 году: новые тенденции", tag: "Аналитика" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50" style={{ background: "hsl(220 15% 5% / 0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="font-display text-xl font-semibold text-gold tracking-wide">
            Маханов Д.А.
          </div>
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link">
                {item.label}
              </button>
            ))}
          </div>
          <button onClick={() => scrollTo("consultation")} className="hidden lg:block btn-primary text-xs py-2 px-5">
            Бесплатная консультация
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-foreground/70 hover:text-gold transition-colors">
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border/30 px-6 py-4 flex flex-col gap-4" style={{ background: "hsl(220 15% 5%)" }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-link text-left">
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollTo("consultation")} className="btn-primary mt-2">
              Бесплатная консультация
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden noise-bg" style={{ background: "hsl(220 15% 5%)" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 80% at 70% 50%, hsl(220 15% 12% / 0.8) 0%, hsl(220 15% 5%) 70%)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30" style={{ background: `url(${LAWYER_PHOTO}) center/cover no-repeat` }} />
          <div className="absolute right-0 top-0 bottom-0 w-1/2" style={{ background: "linear-gradient(90deg, hsl(220 15% 5%) 0%, transparent 40%, hsl(220 15% 5% / 0.6) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
          <div className="max-w-2xl animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Адвокат по уголовным делам</span>
            </div>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-none mb-4 text-foreground">
              Денис
              <br />
              <span className="font-semibold italic">Маханов</span>
            </h1>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-3 animate-fade-in-delay" style={{ maxWidth: "480px" }}>
              18 лет практики в уголовном праве. Защищаю интересы граждан и бизнеса на всех стадиях уголовного процесса.
            </p>
            <p className="text-gold font-display text-lg italic mb-10 animate-fade-in-delay">
              «Ваша свобода — моя профессия»
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <button onClick={() => scrollTo("consultation")} className="btn-primary">
                Получить консультацию
              </button>
              <button onClick={() => scrollTo("results")} className="btn-outline">
                Мои результаты
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">Прокрутите</span>
          <div className="w-px h-10 bg-gold/40" />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border/30" style={{ background: "hsl(220 13% 9%)" }}>
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {results.map((r, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl font-semibold text-gold mb-1">{r.number}</div>
              <div className="font-body text-xs text-muted-foreground tracking-wide uppercase">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 section-medium">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 overflow-hidden" style={{ aspectRatio: "4/5" }}>
              <img src={LAWYER_PHOTO} alt="Адвокат Александр Морозов" className="w-full h-full object-cover object-top grayscale contrast-110" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(220 15% 7%) 0%, transparent 50%)" }} />
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border border-gold/20 z-0" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/15 z-0" />
            <div className="absolute bottom-8 left-6 z-20">
              <div className="font-display text-sm text-gold tracking-widest uppercase">Стаж в уголовном праве</div>
              <div className="font-display text-5xl font-light text-foreground">18 <span className="text-xl">лет</span></div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-line" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Обо мне</span>
            </div>
            <h2 className="font-display text-5xl font-light leading-tight text-foreground mb-6">
              Защита, основанная на <span className="italic text-gold">опыте</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body text-sm leading-relaxed">
              <p>Денис Анатольевич Маханов — адвокат, специализирующийся на защите по уголовным делам. Член Адвокатской палаты города Улан-Удэ.</p>
              <p>Прошёл путь от помощника следователя до независимого адвоката с собственной практикой. Понимаю систему изнутри — это даёт реальное преимущество при защите клиентов.</p>
              <p>Специализируюсь на делах о насилии, экономических преступлениях, наркотиках и налоговых нарушениях. Работаю по всей России.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-border/40 grid grid-cols-2 gap-6">
              {[
                { label: "Образование", value: "ИГУ" },
                { label: "Специализация", value: "Уголовное право" },
                { label: "Членство", value: "АП г. Улан-Удэ" },
                { label: "Регион", value: "Иркутская область" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-1">{item.label}</div>
                  <div className="font-display text-base font-medium text-foreground">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* SERVICES */}
      <section id="services" className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="gold-line" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Практика</span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-5xl font-light text-foreground">
              Услуги <span className="italic">адвоката</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20">
            {services.map((s, i) => (
              <div key={i} className="card-law p-8 group">
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-5 group-hover:border-gold/70 transition-colors">
                  <Icon name={s.icon as "Shield"} size={18} className="text-gold" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 section-medium">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-14">
            <span className="gold-line" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Опыт</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-5xl font-light text-foreground mb-8 leading-tight">
                Путь к <span className="italic text-gold">профессионализму</span>
              </h2>
              <div className="space-y-8">
                {[
                  { year: "2006–2010", role: "Помощник следователя", org: "Следственный комитет РФ, Иркутская область", desc: "Участие в расследовании более 200 уголовных дел различных категорий." },
                  { year: "2010–2016", role: "Адвокат-защитник", org: "Коллегия адвокатов Иркутской области", desc: "Специализация на делах о преступлениях против личности и экономических преступлениях." },
                  { year: "2016–н.в.", role: "Частная практика", org: "Адвокатский кабинет, Иркутск", desc: "Независимая практика. Индивидуальный подход к каждому делу. Работа по всей Иркутской области." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-2 h-2 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                      {i < 2 && <div className="w-px flex-1 bg-border/50 mt-2" />}
                    </div>
                    <div className="pb-6">
                      <div className="font-body text-xs text-gold tracking-widest uppercase mb-1">{item.year}</div>
                      <div className="font-display text-lg font-medium text-foreground">{item.role}</div>
                      <div className="font-body text-xs text-muted-foreground mb-2">{item.org}</div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-light text-foreground mb-6">Специализация по статьям</h3>
              {[
                { art: "Ст. 105 УК РФ", name: "Убийство", count: "48 дел" },
                { art: "Ст. 159 УК РФ", name: "Мошенничество", count: "85 дел" },
                { art: "Ст. 228–234 УК РФ", name: "Наркотики", count: "62 дела" },
                { art: "Ст. 161–163 УК РФ", name: "Грабёж, разбой, вымогательство", count: "40 дел" },
                { art: "Ст. 198–199 УК РФ", name: "Налоговые преступления", count: "55 дел" },
                { art: "Ст. 290–291 УК РФ", name: "Взяточничество", count: "50 дел" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-border/30">
                  <div>
                    <span className="font-body text-xs text-gold tracking-wide">{item.art}</span>
                    <div className="font-display text-base text-foreground">{item.name}</div>
                  </div>
                  <div className="font-body text-xs text-muted-foreground">{item.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ANALYSIS */}
      <section id="analysis" className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="gold-line" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Аналитика</span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-5xl font-light text-foreground">
              Анализ <span className="italic">вашего дела</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
              Каждое дело требует индивидуальной стратегии. Я анализирую ситуацию по трём ключевым направлениям.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border/20 mb-12">
            {[
              { num: "01", title: "Правовая позиция", icon: "BookOpen", items: ["Анализ доказательной базы", "Оценка перспектив дела", "Выявление нарушений следствия", "Поиск оснований для прекращения"] },
              { num: "02", title: "Стратегия защиты", icon: "Target", items: ["Выработка линии защиты", "Взаимодействие со следствием", "Подготовка ходатайств", "Работа с доказательствами"] },
              { num: "03", title: "Тактика в суде", icon: "Gavel", items: ["Анализ позиции обвинения", "Перекрёстный допрос", "Привлечение экспертов", "Апелляционная стратегия"] },
            ].map((block, i) => (
              <div key={i} className="card-law p-8">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-5xl font-light text-border/60">{block.num}</span>
                  <Icon name={block.icon as "BookOpen"} size={20} className="text-gold opacity-70" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-5">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                      <span className="w-1 h-1 bg-gold/60 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="inline-block border border-gold/20 p-8 max-w-2xl">
              <Icon name="AlertCircle" size={20} className="text-gold mx-auto mb-4" />
              <p className="font-display text-lg font-light text-foreground mb-2">
                Не знаете, есть ли шансы выиграть дело?
              </p>
              <p className="font-body text-sm text-muted-foreground mb-6">
                Запишитесь на бесплатную первичную консультацию. За 30 минут я оценю ситуацию и скажу честно, что можно сделать.
              </p>
              <button onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })} className="btn-primary">
                Получить анализ дела
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* RESULTS */}
      <section id="results" className="py-24 section-medium">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-14">
            <span className="gold-line" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Результаты</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="lg:col-span-2 mb-4">
              <h2 className="font-display text-5xl font-light text-foreground">
                Реальные дела, <span className="italic text-gold">реальные победы</span>
              </h2>
            </div>
            {cases.map((c, i) => (
              <div key={i} className="card-law p-8 border-l-2 border-l-gold/30 hover:border-l-gold transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-body text-xs text-muted-foreground tracking-wide uppercase">{c.category}</span>
                  <span className="font-body text-xs text-gold bg-gold/10 px-3 py-1 border border-gold/20">{c.result}</span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* REVIEWS */}
      <section id="reviews" className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="gold-line" />
              <span className="text-gold font-body text-xs tracking-widest uppercase">Отзывы</span>
              <span className="gold-line" />
            </div>
            <h2 className="font-display text-5xl font-light text-foreground">
              Говорят <span className="italic">клиенты</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="card-law p-8 relative">
                <div className="font-display text-6xl text-gold/15 absolute top-4 right-6 leading-none">"</div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-gold text-xs">★</span>
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">«{r.text}»</p>
                <div className="font-display text-base font-medium text-foreground">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* ARTICLES */}
      <section id="articles" className="py-24 section-medium">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="gold-line" />
                <span className="text-gold font-body text-xs tracking-widest uppercase">Блог</span>
              </div>
              <h2 className="font-display text-5xl font-light text-foreground">
                Полезные <span className="italic">статьи</span>
              </h2>
            </div>
          </div>
          <div className="space-y-px bg-border/20">
            {articles.map((a, i) => (
              <article key={i} className="card-law p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group cursor-pointer">
                <div className="font-body text-xs text-muted-foreground tracking-wide md:w-32 flex-shrink-0">{a.date}</div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-medium text-foreground group-hover:text-gold transition-colors">{a.title}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-body text-xs text-gold/70 bg-gold/5 border border-gold/20 px-3 py-1">{a.tag}</span>
                  <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-gold transition-colors" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* CONSULTATION */}
      <section id="consultation" className="py-24 section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ background: "radial-gradient(ellipse at center, hsl(42 65% 55%) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="gold-line" />
            <span className="text-gold font-body text-xs tracking-widest uppercase">Консультация</span>
            <span className="gold-line" />
          </div>
          <h2 className="font-display text-5xl font-light text-foreground mb-4">
            Первый шаг <span className="italic text-gold">к защите</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-10 leading-relaxed">
            Первичная консультация — бесплатно. Расскажите о своей ситуации, я оценю перспективы и предложу стратегию.
          </p>
          <div className="border border-border/50 p-8 text-left" style={{ background: "hsl(220 15% 7%)" }}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-body text-xs text-muted-foreground tracking-widest uppercase block mb-2">Имя</label>
                <input type="text" placeholder="Ваше имя" className="w-full bg-secondary border border-border/50 px-4 py-3 font-body text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/50 transition-colors" style={{ background: "hsl(220 12% 14%)" }} />
              </div>
              <div>
                <label className="font-body text-xs text-muted-foreground tracking-widest uppercase block mb-2">Телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" className="w-full bg-secondary border border-border/50 px-4 py-3 font-body text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/50 transition-colors" style={{ background: "hsl(220 12% 14%)" }} />
              </div>
            </div>
            <div className="mb-6">
              <label className="font-body text-xs text-muted-foreground tracking-widest uppercase block mb-2">Кратко о ситуации</label>
              <textarea rows={4} placeholder="Опишите суть дела в нескольких предложениях..." className="w-full bg-secondary border border-border/50 px-4 py-3 font-body text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-gold/50 transition-colors resize-none" style={{ background: "hsl(220 12% 14%)" }} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button className="btn-primary w-full sm:w-auto">
                Отправить заявку
              </button>
              <p className="font-body text-xs text-muted-foreground text-center">
                Конфиденциально. Ответ в течение 2 часов.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* CONTACTS */}
      <section id="contacts" className="py-24 section-medium">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="gold-line" />
                <span className="text-gold font-body text-xs tracking-widest uppercase">Контакты</span>
              </div>
              <h2 className="font-display text-5xl font-light text-foreground mb-8">
                Связаться <span className="italic text-gold">со мной</span>
              </h2>
              <div className="space-y-6">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (902) 543-63-78", sub: "Звонки принимаются 24/7" },
                  { icon: "MapPin", label: "Адрес", value: "Иркутск", sub: "Приём по предварительной записи" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name={item.icon as "Phone"} size={16} className="text-gold" />
                    </div>
                    <div>
                      <div className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-0.5">{item.label}</div>
                      <div className="font-display text-lg font-medium text-foreground">{item.value}</div>
                      <div className="font-body text-xs text-muted-foreground">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="border border-border/40 p-8" style={{ background: "hsl(220 15% 7%)" }}>
                <h3 className="font-display text-2xl font-light text-foreground mb-3">
                  Режим работы
                </h3>
                <div className="space-y-3 mb-8">
                  {[
                    { days: "Понедельник–пятница", time: "09:00–21:00" },
                    { days: "Суббота", time: "10:00–18:00" },
                    { days: "Воскресенье", time: "По договорённости" },
                    { days: "Экстренные случаи", time: "Круглосуточно" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/20">
                      <span className="font-body text-sm text-muted-foreground">{item.days}</span>
                      <span className="font-body text-sm text-foreground">{item.time}</span>
                    </div>
                  ))}
                </div>
                <div className="border border-gold/20 p-4 bg-gold/5">
                  <div className="flex gap-3 items-start">
                    <Icon name="Shield" size={16} className="text-gold mt-0.5 flex-shrink-0" />
                    <p className="font-body text-xs text-muted-foreground leading-relaxed">
                      Адвокатская тайна гарантируется законом. Все переговоры строго конфиденциальны.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/30 py-8" style={{ background: "hsl(220 15% 5%)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl text-gold">Маханов Д.А.</div>
          <div className="font-body text-xs text-muted-foreground text-center">
            © 2026 Адвокат Маханов Д.А. · Адвокатская палата г. Улан-Удэ
          </div>
          <div className="font-body text-xs text-muted-foreground">
            Информация не является юридической консультацией
          </div>
        </div>
      </footer>
    </div>
  );
}