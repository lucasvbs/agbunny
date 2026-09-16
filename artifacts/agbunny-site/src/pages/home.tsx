import { motion } from "framer-motion";
import { ContactModal } from "@/components/contact-modal";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Layout, 
  PenTool, 
  Zap,
  ShieldCheck,
  Clock,
  ChevronRight,
  Play
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-100">
      <div className="bg-noise" />
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 border-b border-white/5 bg-background/60 backdrop-blur-xl"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo-agbunny-new.png" alt="Anti-Gravity Bunny" className="h-16 w-auto object-contain" />
          </div>
          <ContactModal>
            <Button variant="ghost" className="text-sm font-medium hover:text-cyan-400">
              Falar com a equipe
            </Button>
          </ContactModal>
        </div>
      </motion.nav>

      <main className="pt-20">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-32 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-mesh z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container relative z-10 mx-auto px-6 max-w-5xl text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Agência Full-Stack de Tecnologia
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                Sua marca ainda depende de <br className="hidden md:block" />
                <span className="text-gradient-cyan">improviso digital?</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Social media, site, sistema web — sua empresa não precisa de 5 fornecedores diferentes pra cuidar da tecnologia. A AGBunny resolve tudo com uma equipe que tem mais de 15 anos de experiência.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <ContactModal>
                  <Button size="xl" className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white group shadow-[0_0_40px_-10px_rgba(0,168,232,0.5)] border border-cyan-400/50">
                    Falar com a AGBunny
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </ContactModal>
                <p className="text-xs text-muted-foreground sm:ml-4">
                  Resposta em até 1 dia útil • Sem compromisso
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DESTAQUE EM VÍDEO */}
        <section id="video-destaque" className="relative border-y border-cyan-500/10 bg-cyan-950/10 py-20 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
          <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

          <div className="container relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-2 shadow-[0_24px_80px_-30px_rgba(0,168,232,0.55)]"
            >
              <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.35rem] ring-1 ring-inset ring-white/10" />
              <video
                className="aspect-video w-full rounded-[1.15rem] object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                src="/video-bunny-servicos.mp4"
                poster="/video-bunny-poster.jpg"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Vídeo mostrando exemplos de projetos e serviços da AGBunny"
              />
              <div className="pointer-events-none absolute bottom-5 left-5 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                <Play className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" />
                Veja um pouco do que podemos fazer
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="max-w-xl"
            >
              <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                Do conceito à entrega
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl font-display font-bold leading-tight md:text-4xl">
                Design que chama atenção. Tecnologia que funciona.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Uma amostra do tipo de trabalho que a AGBunny desenvolve para transformar presença digital em uma experiência profissional, clara e pronta para gerar negócio.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
                {["Identidade visual", "Sites profissionais", "Soluções digitais"].map((service) => (
                  <span key={service} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-cyan-100/80">
                    {service}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* EQUIPE */}
        <section id="equipe" className="relative border-b border-white/5 bg-background py-24 md:py-32">
          <div className="container mx-auto max-w-6xl px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
              className="mx-auto mb-14 max-w-3xl text-center"
            >
              <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                Quem faz acontecer
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl font-display font-bold md:text-5xl">
                As mentes que fazem acontecer
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Diferentes especialidades trabalhando juntas para transformar ideias em presença digital, design e tecnologia.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                {
                  src: "/team-wander.jpg",
                  name: "Wander Fabrício",
                  role: "Advogado",
                  alt: "Wander Fabrício, advogado da equipe AGBunny",
                },
                {
                  src: "/team-lucas.jpg",
                  name: "Lucas Vinicius",
                  role: "Web Designer",
                  alt: "Lucas Vinicius, web designer da equipe AGBunny",
                },
                {
                  src: "/team-leo.jpg",
                  name: "Leo",
                  role: "Diretor de arte chefe",
                  alt: "Leo, diretor de arte chefe da equipe AGBunny",
                },
                {
                  src: "/team-matheus.jpg",
                  name: "Matheus Gonzaga",
                  role: "Publicitário",
                  alt: "Matheus Gonzaga, publicitário da equipe AGBunny",
                },
                {
                  src: "/team-nilon.jpg",
                  name: "Nilon Moura",
                  role: "Contador",
                  alt: "Nilon Moura, contador da equipe AGBunny",
                },
              ].map((member) => (
                <motion.article
                  key={member.name}
                  variants={fadeUp}
                  className="glass-card group overflow-hidden rounded-2xl border border-white/8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_20px_45px_-25px_rgba(0,168,232,0.7)]"
                >
                  <div className="relative aspect-square overflow-hidden bg-cyan-950/20">
                    <img
                      src={member.src}
                      alt={member.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-70" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-xl font-semibold text-foreground">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-cyan-400">{member.role}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROPOSTA DE VALOR & DORES */}
        <section className="py-24 relative border-t border-white/5 bg-background/50">
          <div className="container mx-auto px-6 max-w-6xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              <div className="space-y-6">
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold">
                  O caminho mais comum é o mais frustrante.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
                  Toda empresa em crescimento chega nesse ponto: as redes sociais precisam de arte profissional, o site não converte mais e falta um sistema pra organizar o operacional.
                </motion.p>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
                  E o caminho mais comum é contratar um freelancer pra cada coisa — e torcer pra tudo se conversar. A AGBunny nasceu pra resolver isso de um jeito só. Não é sobre "mais um fornecedor". É sobre parar de remendar tecnologia e ter um parceiro que entende o negócio como um todo.
                </motion.p>
              </div>

              <motion.div variants={fadeUp} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] group-hover:bg-red-500/10 transition-colors" />
                <h3 className="text-xl font-medium mb-6 flex items-center gap-3">
                  <Zap className="text-red-400 w-5 h-5" />
                  A gente já viu esse filme antes:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Você já perdeu venda porque o site demorou pra carregar ou não passava confiança.",
                    "As redes sociais ficam sem postar por semanas porque ninguém tem tempo pra fazer arte.",
                    "Cada fornecedor de tecnologia fala uma língua diferente, e você vira o tradutor.",
                    "Já pagou por um site ou sistema que ficou pela metade, sem suporte depois.",
                    "A sensação de que a empresa cresceu, mas a tecnologia ficou pra trás."
                  ].map((dor, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{dor}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SOLUÇÃO & BENEFÍCIOS */}
        <section className="py-32 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-4xl md:text-5xl font-display font-bold mb-6"
              >
                Atendimento Full-Stack
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-lg text-muted-foreground"
              >
                Uma única equipe cuida da arte das suas redes, do seu site institucional e, quando o negócio pede, de sistemas web sob medida.
              </motion.p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-6 mb-16"
            >
              {/* Cards de Solução */}
              {[
                { icon: PenTool, title: "Social Media & Design", desc: "Sua marca com identidade visual consistente em todos os canais. Sem mais silêncio por falta de artes." },
                { icon: Layout, title: "Sites que Convertem", desc: "Seu site vira uma ferramenta de vendas, não só um cartão de visitas online." },
                { icon: Code2, title: "Sistemas Sob Medida", desc: "Você tem um sistema que organiza o operacional de verdade em vez de planilhas soltas." },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeUp} className="glass-card p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1 group">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-x-12 gap-y-6 bg-cyan-950/10 border border-cyan-500/10 rounded-3xl p-8 md:p-12 mb-20"
            >
              {[
                "Você para de perder tempo intermediando freelancers que não se falam",
                "Sua marca fica com identidade visual consistente em todos os canais",
                "Seu site vira uma ferramenta de vendas, não só um cartão de visitas online",
                "Você tem um sistema que organiza o operacional em vez de planilha solta",
                "Suporte de uma equipe que já resolveu isso com mais de 15 anos de experiência, não de quem está aprendendo com o seu projeto",
                "Contrato com escopo claro — você sabe exatamente o que está pagando e o que vai receber"
              ].map((beneficio, i) => (
                <motion.div key={i} variants={fadeUp} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">{beneficio}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-20 p-8 md:p-12 rounded-3xl bg-cyan-950/20 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/40 via-transparent to-transparent opacity-50" />
              <div className="relative z-10 max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  A equipe por trás da sua tecnologia.
                </h3>
                <p className="text-lg text-cyan-100/70">
                  Pare de perder tempo intermediando freelancers que não se falam. Tenha o suporte de uma equipe com <strong>mais de 15 anos de experiência combinada</strong>. Nós não estamos aprendendo com o seu projeto, nós já resolvemos isso antes.
                </p>
              </div>
              <div className="relative z-10 shrink-0">
                <ContactModal>
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 text-white w-full md:w-auto">
                    Quero organizar minha tecnologia
                  </Button>
                </ContactModal>
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMO FUNCIONA & OFERTA */}
        <section className="py-24 relative border-t border-white/5 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16">
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold mb-8">
                  Como funciona nossa parceria
                </motion.h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/50 before:via-white/10 before:to-transparent">
                  {[
                    { title: "Conversa inicial", desc: "Bate-papo para entender sua necessidade (via e-mail/WhatsApp)." },
                    { title: "Diagnóstico e proposta", desc: "Apresentação de escopo sob medida para o seu momento." },
                    { title: "Contrato e clareza", desc: "Prazos, garantias e etapas de aprovação definidos formalmente." },
                    { title: "Execução", desc: "Acompanhamento próximo em cada fase do desenvolvimento." },
                    { title: "Entrega e suporte", desc: "Projeto no ar com suporte pós-entrega garantido." },
                  ].map((step, i) => (
                    <motion.div key={i} variants={fadeUp} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-cyan-950 text-cyan-400 font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(0,168,232,0.3)] z-10">
                        {i + 1}
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-5 rounded-xl border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                        <h4 className="font-medium text-lg mb-1">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-8 h-full flex flex-col justify-center"
              >
                <motion.div variants={fadeUp} className="glass-card p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full" />
                  <ShieldCheck className="w-10 h-10 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-display font-bold mb-4">Escopo claro. Sem sustos.</h3>
                  <p className="text-muted-foreground mb-6">
                    Investimento sob medida, de acordo com o escopo — sem tabela fechada, porque cada negócio precisa de uma combinação diferente de serviços. Contratação formalizada, com garantia para os dois lados.
                  </p>
                  <p className="text-sm font-medium text-white mb-2">Mas é caro?</p>
                  <p className="text-sm text-muted-foreground">
                    Caro é pagar por um site que não converte, por artes que não saem no prazo, ou por um freelancer que some. Com a AGBunny você sabe exatamente o que está pagando e o que vai receber.
                  </p>
                </motion.div>
                
                <motion.div variants={fadeUp} className="glass-card p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-cyan-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium text-cyan-100 mb-1">Atendimento sob medida</h4>
                      <p className="text-sm text-cyan-100/70">
                        Cada projeto começa com um diagnóstico da necessidade, seguido de proposta, contrato, etapas de aprovação e suporte combinado.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 relative border-t border-white/5">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-muted-foreground">Tudo às claras, antes mesmo da nossa primeira conversa.</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Quanto tempo leva pra ter uma proposta?</AccordionTrigger>
                  <AccordionContent>
                    Normalmente 1 dia útil após a nossa primeira conversa de diagnóstico.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Serve pra empresa pequena ou só pra quem já é grande?</AccordionTrigger>
                  <AccordionContent>
                    Serve pros dois — o escopo é montado sob medida para o tamanho, a necessidade e o momento financeiro do seu negócio.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>E se eu só precisar de uma parte (só redes sociais, por exemplo)?</AccordionTrigger>
                  <AccordionContent>
                    Sem problema, o nosso atendimento é modular. Você contrata o que faz sentido agora e pode expandir depois.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Como funciona o pagamento?</AccordionTrigger>
                  <AccordionContent>
                    Os formatos de pagamento são definidos em contrato, de acordo com o escopo fechado e as etapas de entrega.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Tem suporte depois da entrega?</AccordionTrigger>
                  <AccordionContent>
                    Sim, faz parte do processo. O suporte pós-entrega é incluso conforme o que for combinado em contrato.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6" className="border-b-0">
                  <AccordionTrigger>Preciso assinar contrato mesmo pra projetos menores?</AccordionTrigger>
                  <AccordionContent>
                    Sim — é o que garante segurança pros dois lados, independente do tamanho do projeto. O que está escrito é o que será cumprido.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-950/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />
          
          <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold">
                Sua empresa não precisa de mais um fornecedor de tecnologia.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Precisa de alguém que resolve. Fale com a AGBunny agora e veja como organizar sua presença digital de um jeito só.
              </motion.p>
              
              <motion.div variants={fadeUp} className="pt-8">
                <ContactModal>
                  <Button size="xl" className="bg-cyan-500 hover:bg-cyan-400 text-cyan-950 font-bold shadow-[0_0_40px_-10px_rgba(0,168,232,0.6)] hover:shadow-[0_0_60px_-10px_rgba(0,168,232,0.8)] transition-all duration-300">
                    Falar com a AGBunny
                    <ChevronRight className="ml-2 w-6 h-6" />
                  </Button>
                </ContactModal>
              </motion.div>
              
              <motion.p variants={fadeUp} className="text-sm text-cyan-200/60 max-w-xl mx-auto italic mt-8">
                PS: Enquanto sua tecnologia fica dividida entre vários fornecedores, seu concorrente pode estar centralizando tudo com um parceiro só. A experiência de mais de 15 anos da equipe não se improvisa — fale com a AGBunny.
              </motion.p>
            </motion.div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-background/80">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 opacity-50 grayscale">
            <img src="/logo-agbunny.jpeg" alt="AGBunny Logo" className="w-8 h-8 rounded-full" />
            <span className="font-display font-bold tracking-tight text-white">AGBUNNY</span>
          </div>
          
          <div className="text-center md:text-right text-xs text-muted-foreground/60 space-y-1">
            <p>LS DESIGN E DESENVOLVIMENTO LTDA</p>
            <p>CNPJ: 50.416.508/0001-43</p>
            <p className="pt-2">© {new Date().getFullYear()} AGBunny. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}