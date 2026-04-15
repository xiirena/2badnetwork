import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gamepad2, 
  Copy, 
  Check, 
  MessageSquare, 
  Shield, 
  Swords, 
  Crown,
  Skull,
  Clock,
  Euro,
  Star,
  Zap,
  Monitor,
  Smartphone,
  Image as ImageIcon
} from 'lucide-react';

// --- Leaderboard Data ---
const killsLeaderboard = [
  { rank: 1, username: '.', discord: '.', skin: '.', stat: '0 kills' },
  { rank: 2, username: '.', discord: '.', skin: '.', stat: '0 kills' },
  { rank: 3, username: '.', discord: '.', skin: '.', stat: '0 kills' },
];

const playtimeLeaderboard = [
  { rank: 1, username: '.', discord: '.', skin: '.', stat: '0' },
  { rank: 2, username: '.', discord: '.', skin: '.', stat: '0' },
  { rank: 3, username: '.', discord: '.', skin: '.', stat: '0' },
];

const spendingLeaderboard = [
  { rank: 1, username: '.', discord: '.', skin: '.', stat: '0' },
  { rank: 2, username: '.', discord: '.', skin: '.', stat: '0' },
  { rank: 3, username: '.', discord: '.', skin: '.', stat: '0' },
];

const rankColors: Record<number, string> = {
  1: '#FFD700',
  2: '#C0C0C0',
  3: '#CD7F32',
};

function getSkinUrl(skinName: string) {
  return `https://mc-heads.net/avatar/${skinName}/64`;
}

function LeaderboardSection({ title, icon, data, statLabel }: {
  title: string;
  icon: React.ReactNode;
  data: typeof killsLeaderboard;
  statLabel: string;
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#0d0b1a] border border-purple-900/40 rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-purple-700/5 rounded-full blur-3xl group-hover:bg-purple-700/20 transition-colors duration-500 pointer-events-none" />
      <div className="flex items-center gap-3 mb-2">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
          className="w-10 h-10 bg-purple-700/20 rounded-xl flex items-center justify-center text-purple-400"
        >
          {icon}
        </motion.div>
        <h3 className="font-display text-2xl uppercase tracking-widest text-white">{title}</h3>
      </div>
      <div className="flex flex-col gap-4">
        {data.map((entry) => (
          <motion.div
            key={entry.rank}
            whileHover={{ x: 6, backgroundColor: 'rgba(19, 16, 42, 0.8)' }}
            className="flex items-center gap-5 bg-[#13102a] border border-purple-900/30 rounded-2xl px-5 py-4 transition-colors"
          >
            <span className="font-display text-3xl w-8 text-center" style={{ color: rankColors[entry.rank] }}>
              {entry.rank === 1 ? '#1' : `#${entry.rank}`}
            </span>
            <img
              src={getSkinUrl(entry.skin)}
              alt={entry.username}
              className="w-12 h-12 rounded-xl border-2"
              style={{ borderColor: rankColors[entry.rank] }}
            />
            <div className="flex-1 min-w-0">
              <div className="font-bold text-white text-base truncate">{entry.username}</div>
              <div className="text-purple-400/70 text-xs truncate">{entry.discord}</div>
            </div>
            <div className="font-display text-lg text-right" style={{ color: rankColors[entry.rank] }}>
              {entry.stat}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'store' | 'leaderboards' | 'connect'>('home');
  const serverIP = "2badmc.play.hosting";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#06050f] selection:bg-purple-600 selection:text-white overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at 50% 0%, rgba(120,60,220,0.2) 0%, transparent 60%)',
          }} 
        />
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: Math.random() }}
            animate={{ opacity: [0.1, 0.5, 0.1] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              borderRadius: '50%',
              background: 'white',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[140px]" style={{ background: 'rgba(109,40,217,0.13)' }} />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full blur-[120px]" style={{ background: 'rgba(139,92,246,0.08)' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-purple-900/30" style={{ background: 'rgba(8,6,20,0.75)', backdropFilter: 'blur(16px)' }}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center transform -rotate-6" style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)', boxShadow: '0 0 15px rgba(168,85,247,0.4)' }}>
              <Gamepad2 className="text-white" size={22} />
            </div>
            <span className="font-display text-2xl tracking-wider uppercase text-white font-black">2Bad MC</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-2">
            {(['home', 'store', 'leaderboards', 'connect'] as const).map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-widest transition-all duration-200 ${
                  activeTab === tab
                    ? 'text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                    : 'text-white/50 hover:text-white/80'
                }`}
                style={activeTab === tab ? { background: 'linear-gradient(135deg,#7c3aed55,#a855f733)', border: '1px solid rgba(168,85,247,0.4)' } : {}}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(139,92,246,0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={copyIP}
            className="px-6 py-2.5 rounded-full font-semibold text-sm uppercase tracking-wider text-white transition-all duration-300"
            style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)' }}
          >
            Play Now
          </motion.button>
        </div>
        
        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-center gap-1 pb-3 px-4">
          {(['home', 'store', 'leaderboards', 'connect'] as const).map((tab) => (
            <motion.button
              whileTap={{ scale: 0.9 }}
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                activeTab === tab ? 'text-white' : 'text-white/50'
              }`}
              style={activeTab === tab ? { background: 'rgba(139,92,246,0.25)', border: '1px solid rgba(168,85,247,0.4)' } : {}}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </nav>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {/* ===== HOME PAGE ===== */}
          {activeTab === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              
              {/* Hero */}
              <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6"
                  >
                    <motion.span 
                      animate={{ boxShadow: ["0 0 10px rgba(168,85,247,0.2)", "0 0 20px rgba(168,85,247,0.5)", "0 0 10px rgba(168,85,247,0.2)"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block py-1 px-4 rounded-full border text-xs font-bold tracking-[0.2em] uppercase mb-6" 
                      style={{ borderColor: 'rgba(168,85,247,0.3)', background: 'rgba(139,92,246,0.1)', color: '#c084fc' }}
                    >
                      Season I is Live!
                    </motion.span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="transform -skew-x-6 mb-8"
                  >
                    <h1 className="font-display text-[12vw] md:text-[140px] leading-[0.85] uppercase tracking-tighter text-white drop-shadow-2xl font-black">
                      2BAD <span style={{ background: 'linear-gradient(to right,#a855f7,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', filter: 'drop-shadow(0 0 30px rgba(168,85,247,0.3))' }}>MC</span>
                    </h1>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 font-light"
                  >
                    The best Kit PVP server/community 1.21-1.21.1 supports Java and Bedrock Edition.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02, borderColor: 'rgba(168,85,247,0.5)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={copyIP}
                      className="group relative flex items-center gap-4 px-8 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto border"
                      style={{ background: '#0d0b1a', borderColor: 'rgba(139,92,246,0.25)' }}
                    >
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">Server IP</span>
                        <span className="font-mono text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{serverIP}</span>
                      </div>
                      <div className="w-[1px] h-8 mx-2" style={{ background: 'rgba(255,255,255,0.1)' }} />
                      {copied ? <Check className="text-purple-400" /> : <Copy className="text-white/50 group-hover:text-white transition-colors" />}
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.02, backgroundColor: '#4e59d1', boxShadow: '0 0 20px rgba(88,101,242,0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      href="#discord"
                      className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-colors w-full sm:w-auto text-white"
                      style={{ background: '#5865F2' }}
                    >
                      <MessageSquare size={20} />
                      <span>Join Our Discord</span>
                    </motion.a>
                  </motion.div>
                </div>
              </section>

              {/* Features */}
              <section className="py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16">
                    <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight mb-4 text-white font-black">
                      Why <span style={{ background: 'linear-gradient(to right,#a855f7,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>2Bad MC?</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto">We offer a nice & active community with a good staff team.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      { icon: <Skull size={28} />, title: 'Kit PVP', desc: 'Kit pvp claim a kit and go conquer.' },
                      { icon: <Zap size={28} />, title: 'Weekly Events', desc: 'Fun events for special rewards.' },
                      { icon: <Star size={28} />, title: 'Growing Community', desc: 'Active Discord, and a staff team that actually cares.' },
                    ].map((f, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 20px rgba(168,85,247,0.15)', borderColor: 'rgba(168,85,247,0.4)' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i, duration: 0.6 }}
                        className="rounded-3xl p-8 border flex flex-col gap-4 transition-colors"
                        style={{ background: '#0d0b1a', borderColor: 'rgba(139,92,246,0.2)' }}
                      >
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-purple-400" style={{ background: 'rgba(139,92,246,0.15)' }}>
                          {f.icon}
                        </div>
                        <h3 className="font-display text-2xl uppercase tracking-wide text-white font-bold">{f.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Community/Socials */}
              <section className="py-20 border-y border-purple-900/20 relative z-10" style={{ background: 'rgba(13,11,26,0.6)' }}>
                <div className="max-w-7xl mx-auto px-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2">
                      <h2 className="font-display text-5xl uppercase tracking-tight mb-6 text-white font-black">Join Our <br/><span style={{ background: 'linear-gradient(to right,#a855f7,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Community</span></h2>
                      <p className="text-white/60 mb-8 text-lg">Stay updated with the latest server news, events, and giveaways.</p>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { icon: <MessageSquare size={24} />, name: 'Discord', sub: 'Growing 📈', color: '#5865F2' },
                        ].map((s) => (
                          <motion.a 
                            whileHover={{ scale: 1.05, borderColor: s.color }}
                            key={s.name} 
                            href="#" 
                            className="flex items-center gap-4 p-4 rounded-2xl border transition-colors group" 
                            style={{ background: '#0d0b1a', borderColor: 'rgba(139,92,246,0.2)' }}
                          >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors" style={{ background: `${s.color}18`, color: s.color }}>
                              {s.icon}
                            </div>
                            <div>
                              <div className="font-bold text-white">{s.name}</div>
                              <div className="text-xs text-white/50">{s.sub}</div>
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* ===== STORE PAGE ===== */}
          {activeTab === 'store' && (
            <motion.div key="store" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="min-h-screen pt-32 pb-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                  <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tight mb-4 text-white font-black">Choose Your <span style={{ background: 'linear-gradient(to right,#a855f7,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Rank</span></h2>
                  <p className="text-white/60 max-w-2xl mx-auto">Support the server and unlock exclusive perks, kits, and cosmetics.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* VIP */}
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: '0 0 60px rgba(99,102,241,0.4)', borderColor: 'rgba(99,102,241,0.8)' }} 
                    className="rounded-3xl p-8 flex flex-col relative overflow-hidden group transition-colors duration-300" 
                    style={{ background: '#0a0a16', border: '1px solid rgba(99,102,241,0.3)', boxShadow: '0 0 20px rgba(99,102,241,0.15)' }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-colors duration-300" style={{ background: 'rgba(99,102,241,0.15)' }} />
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8' }}>
                      <Shield size={28} />
                    </div>
                    <h3 className="font-display text-4xl uppercase tracking-wide mb-2 text-white font-black drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">VIP</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-white">€4.99</span>
                      <span className="text-white/40 text-sm">/lifetime</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {['Access to /kit vip', 'Custom chat color', '2 Sethomes', 'Priority queue'].map(p => (
                        <li key={p} className="flex items-center gap-3 text-white/70 text-sm"><Check size={16} style={{ color: '#818cf8' }} /> {p}</li>
                      ))}
                    </ul>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full py-4 rounded-xl font-bold transition-all text-white hover:bg-[#818cf8]/20" style={{ border: '1px solid rgba(99,102,241,0.5)', color: '#818cf8', boxShadow: '0 0 15px rgba(99,102,241,0.2)' }}>
                      Purchase VIP
                    </motion.button>
                  </motion.div>

                  {/* MVP */}
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: '0 0 60px rgba(168,85,247,0.5)', borderColor: 'rgba(168,85,247,0.8)' }} 
                    className="rounded-3xl p-8 flex flex-col relative overflow-hidden group transition-colors duration-300" 
                    style={{ background: '#0a0a16', border: '1px solid rgba(168,85,247,0.4)', boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-colors duration-300" style={{ background: 'rgba(168,85,247,0.15)' }} />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-white text-xs font-bold uppercase tracking-wider py-1 px-6 rounded-b-lg shadow-[0_0_15px_rgba(168,85,247,0.5)]" style={{ background: '#a855f7' }}>
                      Popular
                    </div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mt-4" style={{ background: 'rgba(168,85,247,0.15)', color: '#c084fc' }}>
                      <Swords size={28} />
                    </div>
                    <h3 className="font-display text-4xl uppercase tracking-wide mb-2 text-white font-black drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">MVP</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-white">€6.99</span>
                      <span className="text-white/40 text-sm">/lifetime</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {['All VIP Perks', 'Access to /kit mvp', '5 Sethomes', '/fly in spawn', 'Custom prefix'].map(p => (
                        <li key={p} className="flex items-center gap-3 text-white/70 text-sm"><Check size={16} style={{ color: '#c084fc' }} /> {p}</li>
                      ))}
                    </ul>
                    <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(168,85,247,0.7)' }} whileTap={{ scale: 0.95 }} className="w-full py-4 rounded-xl font-bold text-white transition-all" style={{ background: '#a855f7' }}>
                      Purchase MVP
                    </motion.button>
                  </motion.div>

                  {/* Legend */}
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: '0 0 60px rgba(251,191,36,0.4)', borderColor: 'rgba(251,191,36,0.8)' }} 
                    className="rounded-3xl p-8 flex flex-col relative overflow-hidden group transition-colors duration-300" 
                    style={{ background: '#0a0a16', border: '1px solid rgba(251,191,36,0.3)', boxShadow: '0 0 20px rgba(251,191,36,0.15)' }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-colors duration-300" style={{ background: 'rgba(251,191,36,0.1)' }} />
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(251,191,36,0.12)', color: '#fbbf24' }}>
                      <Star size={28} />
                    </div>
                    <h3 className="font-display text-4xl uppercase tracking-wide mb-2 text-white font-black drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">Legend</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-white">€9.99</span>
                      <span className="text-white/40 text-sm">/lifetime</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {['All MVP Perks', 'Access to /kit legend', '10 Sethomes', '/nick command', 'Exclusive cosmetics'].map(p => (
                        <li key={p} className="flex items-center gap-3 text-white/70 text-sm"><Check size={16} style={{ color: '#fbbf24' }} /> {p}</li>
                      ))}
                    </ul>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full py-4 rounded-xl font-bold transition-all hover:bg-[#fbbf24]/20" style={{ border: '1px solid rgba(251,191,36,0.5)', color: '#fbbf24', boxShadow: '0 0 15px rgba(251,191,36,0.2)' }}>
                      Purchase Legend
                    </motion.button>
                  </motion.div>

                  {/* Elite */}
                  <motion.div 
                    whileHover={{ y: -10, boxShadow: '0 0 60px rgba(251,113,133,0.4)', borderColor: 'rgba(251,113,133,0.8)' }} 
                    className="rounded-3xl p-8 flex flex-col relative overflow-hidden group transition-colors duration-300" 
                    style={{ background: '#0a0a16', border: '1px solid rgba(251,113,133,0.3)', boxShadow: '0 0 20px rgba(251,113,133,0.15)' }}
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none transition-colors duration-300" style={{ background: 'rgba(251,113,133,0.1)' }} />
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'rgba(251,113,133,0.12)', color: '#fb7185' }}>
                      <Crown size={28} />
                    </div>
                    <h3 className="font-display text-4xl uppercase tracking-wide mb-2 text-white font-black drop-shadow-[0_0_10px_rgba(251,113,133,0.5)]">Elite</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-white">€11.99</span>
                      <span className="text-white/40 text-sm">/lifetime</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-1">
                      {['All Legend Perks', 'Access to /kit elite', 'Unlimited Sethomes', 'Elite tag + glow', 'Early access features'].map(p => (
                        <li key={p} className="flex items-center gap-3 text-white/70 text-sm"><Check size={16} style={{ color: '#fb7185' }} /> {p}</li>
                      ))}
                    </ul>
                    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full py-4 rounded-xl font-bold transition-all hover:bg-[#fb7185]/20" style={{ border: '1px solid rgba(251,113,133,0.5)', color: '#fb7185', boxShadow: '0 0 15px rgba(251,113,133,0.2)' }}>
                      Purchase Elite
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ===== LEADERBOARDS PAGE ===== */}
          {activeTab === 'leaderboards' && (
            <motion.div key="leaderboards" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="min-h-screen pt-32 pb-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-16">
                  <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-5 mb-4">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center transform -rotate-6" style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)', boxShadow: '0 0 40px rgba(139,92,246,0.4)' }}>
                      <Gamepad2 className="text-white" size={48} />
                    </div>
                    <span className="font-display text-6xl md:text-8xl tracking-wider uppercase text-white font-black">2BAD MC</span>
                  </motion.div>
                  <h2 className="font-display text-3xl md:text-4xl uppercase tracking-widest text-center font-bold" style={{ color: '#a855f7' }}>Leaderboards</h2>
                  <p className="text-white/40 mt-2 text-center">Top 3 players for each category — updated daily</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <LeaderboardSection title="Kills" icon={<Skull size={22} />} data={killsLeaderboard} statLabel="kills" />
                  <LeaderboardSection title="Playtime" icon={<Clock size={22} />} data={playtimeLeaderboard} statLabel="hrs" />
                  <LeaderboardSection title="Spending" icon={<Euro size={22} />} data={spendingLeaderboard} statLabel="€" />
                </div>
              </div>
            </motion.div>
          )}

          {/* ===== CONNECT PAGE (NEW GUIDE) ===== */}
          {activeTab === 'connect' && (
            <motion.div key="connect" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="min-h-screen pt-32 pb-20">
              <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="font-display text-5xl md:text-6xl uppercase tracking-tight mb-4 text-white font-black">How to <span style={{ background: 'linear-gradient(to right,#a855f7,#7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Connect</span></h2>
                  <p className="text-white/60 text-lg">Join the 2BAD MC network on either Java or Bedrock Edition!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {/* Java Instructions */}
                  <div className="bg-[#0d0b1a] border border-blue-900/40 hover:border-blue-500/60 rounded-[2rem] p-8 shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-300">
                     <h3 className="text-2xl font-black uppercase text-blue-400 mb-6 flex items-center gap-3"><Monitor size={28} /> Java Edition</h3>
                     <ol className="space-y-5 text-white/70">
                       <li className="flex gap-4 items-start"><span className="text-blue-500 font-black text-lg bg-blue-500/10 px-3 py-1 rounded-lg">1</span> <span className="mt-1">Open Minecraft Java Edition (Version 1.21+).</span></li>
                       <li className="flex gap-4 items-start"><span className="text-blue-500 font-black text-lg bg-blue-500/10 px-3 py-1 rounded-lg">2</span> <span className="mt-1">Click on <strong>"Multiplayer"</strong> and then <strong>"Add Server"</strong>.</span></li>
                       <li className="flex gap-4 items-start"><span className="text-blue-500 font-black text-lg bg-blue-500/10 px-3 py-1 rounded-lg">3</span> <span className="mt-1">Set Server Address to <strong className="text-white selection:bg-blue-500">{serverIP}</strong>.</span></li>
                       <li className="flex gap-4 items-start"><span className="text-blue-500 font-black text-lg bg-blue-500/10 px-3 py-1 rounded-lg">4</span> <span className="mt-1">Set the server name to </strong>2Bad MC.</span></li>
                       <li className="flex gap-4 items-start"><span className="text-blue-500 font-black text-lg bg-blue-500/10 px-3 py-1 rounded-lg">5</span> <span className="mt-1">Click <strong>"Done"</strong> and double-click to join!</span></li>
                     </ol>
                  </div>

                  {/* Bedrock Instructions */}
                  <div className="bg-[#0d0b1a] border border-purple-900/40 hover:border-purple-500/60 rounded-[2rem] p-8 shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-300">
                     <h3 className="text-2xl font-black uppercase text-purple-400 mb-6 flex items-center gap-3"><Smartphone size={28} /> Bedrock Edition</h3>
                     <ol className="space-y-5 text-white/70">
                       <li className="flex gap-4 items-start"><span className="text-purple-500 font-black text-lg bg-purple-500/10 px-3 py-1 rounded-lg">1</span> <span className="mt-1">Open Minecraft Bedrock Edition.</span></li>
                       <li className="flex gap-4 items-start"><span className="text-purple-500 font-black text-lg bg-purple-500/10 px-3 py-1 rounded-lg">2</span> <span className="mt-1">Click <strong>"Play"</strong> and navigate to the <strong>"Servers"</strong> tab.</span></li>
                       <li className="flex gap-4 items-start"><span className="text-purple-500 font-black text-lg bg-purple-500/10 px-3 py-1 rounded-lg">3</span> <span className="mt-1">Scroll to the bottom and click <strong>"Add Server"</strong>.</span></li>
                       <li className="flex gap-4 items-start">
                         <span className="text-purple-500 font-black text-lg bg-purple-500/10 px-3 py-1 rounded-lg">4</span> 
                         <div className="mt-1">
                           Server Name: <strong className="text-white">2BAD MC</strong><br/>
                           Server Address: <strong className="text-white selection:bg-purple-500">{serverIP}</strong><br/>
                           Port: <strong className="text-white">19132</strong>
                         </div>
                       </li>
                       <li className="flex gap-4 items-start"><span className="text-purple-500 font-black text-lg bg-purple-500/10 px-3 py-1 rounded-lg">5</span> <span className="mt-1">Click <strong>"Save"</strong> and hit join!</span></li>
                     </ol>
                  </div>
                </div>

                {/* Screenshot Placeholder Area */}
                <div className="w-full bg-[#0a0a16]/50 border-2 border-dashed border-purple-500/30 rounded-[2rem] p-12 flex flex-col items-center justify-center text-center aspect-video relative overflow-hidden group hover:border-purple-500/60 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none" />
                  
                  {/* Replace everything inside this div with your <img src="..." /> tag */}
                  <img 
                    src="https://cdn.discordapp.com/attachments/1490432988389970093/1493913298087841832/2026-04-15_11.57.40.png?ex=69e0b2ad&is=69df612d&hm=6267afe9b40fcc2c86e62b2cb382d5d2e70a022408c9be9c78fcd7cf55565935&" 
                    alt="Server Screenshot" 
                    className="w-full h-full object-cover rounded-[1.8rem] z-10" 
                  />

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="border-t border-purple-900/20 py-12 relative z-10" style={{ background: '#06050f' }}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center transform -rotate-6" style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)' }}>
                <Gamepad2 className="text-white" size={18} />
              </div>
              <span className="font-display text-xl tracking-wider uppercase text-white font-black">2Bad MC</span>
            </div>
            <div className="text-white/40 text-sm text-center md:text-left">© 2026 2Bad MC. Not affiliated with Mojang AB.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white text-sm font-medium transition-colors">Terms</a>
              <a href="#" className="text-white/40 hover:text-white text-sm font-medium transition-colors">Privacy</a>
              <a href="#" className="text-white/40 hover:text-white text-sm font-medium transition-colors">Rules</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
