(() => {
if (customElements.get('orbit-catch')) return;

const C = 150, RADII = [56, 98, 140], SIZE = [15, 16, 17], PTS = [100, 150, 200];
const SPEED = [0.32, -0.22, 0.15], OFF = [-90, -30, -60];
const AIM_SPEED = 1.5, SHOT_SPEED = 300, ROUND = 30, LIVES = 3, HIT_PAD = 9;
const NS = 'http://www.w3.org/2000/svg';
const MINT = '#34C79A', MINT_T = '#9FE7C8', CREAM = '#F2C48D', INK = '#0B1F17';

const ICON = {
  pause: '<path d="M8 5v14M16 5v14"/>',
  play: '<path d="M7 4.5v15l12-7.5z"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  soundOff: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="m22 9-6 6M16 9l6 6"/>',
  soundOn: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>'
};
const ic = n => `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[n]}</svg>`;

const CSS = `
:host{display:block;width:300px;max-width:100%;font-family:inherit;color:#FFFFFF;-webkit-tap-highlight-color:transparent}
*{box-sizing:border-box}
button{font:inherit;color:inherit}
.hud{display:flex;align-items:center;gap:10px;height:40px;margin-bottom:6px}
.stat{display:flex;flex-direction:column;gap:1px;min-width:0}
.stat small{font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#B9D3C6}
.stat b{font-family:'Jost','Satoshi',sans-serif;font-weight:500;font-size:18px;line-height:1.05;font-variant-numeric:tabular-nums}
.stat b.low{color:${CREAM}}
.lives{display:flex;gap:4px;align-items:center;height:18px}
.life{width:12px;height:12px;border-radius:50%;background:${MINT};box-shadow:0 0 0 2px rgba(52,199,154,.18);position:relative;transition:background 200ms ease,box-shadow 200ms ease}
.life.used{background:transparent;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.4)}
.life.used::before,.life.used::after{content:"";position:absolute;left:2px;right:2px;top:5px;height:1.5px;background:rgba(255,255,255,.55);transform:rotate(45deg)}
.life.used::after{transform:rotate(-45deg)}
.sp{flex:1}
.ib{appearance:none;width:32px;height:32px;flex:none;border-radius:50%;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);display:grid;place-items:center;cursor:pointer;transition:background 150ms ease,transform 120ms ease}
.ib:hover{background:rgba(255,255,255,.14)}
.ib:active{transform:scale(.92)}
.ib[aria-pressed="true"]{color:${MINT_T};border-color:rgba(159,231,200,.45)}
:focus-visible{outline:2px solid ${MINT_T};outline-offset:2px}
.stage{position:relative;width:100%;aspect-ratio:1;border-radius:50%;cursor:crosshair;touch-action:manipulation;user-select:none;-webkit-user-select:none}
.stage:focus-visible{outline-offset:4px}
svg.board{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.fx{position:absolute;inset:0;pointer-events:none}
.float{position:absolute;transform:translate(-50%,-50%);font-family:'Jost','Satoshi',sans-serif;font-weight:600;font-size:15px;white-space:nowrap;color:${MINT_T};text-shadow:0 2px 8px rgba(0,0,0,.45);animation:fl 900ms cubic-bezier(.23,1,.32,1) forwards}
.float.bonus{font-size:12px;color:${CREAM}}
.float.miss{color:#D9E6DF;font-size:13px;font-family:inherit;font-weight:700}
@keyframes fl{0%{opacity:0;transform:translate(-50%,-30%)}15%{opacity:1}100%{opacity:0;transform:translate(-50%,-150%)}}
.overlay{position:absolute;inset:0;display:grid;place-items:center;border-radius:50%;background:radial-gradient(closest-side,rgba(8,26,19,.92) 62%,rgba(8,26,19,.55) 100%);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);animation:ov 220ms ease}
.overlay[hidden]{display:none}
@keyframes ov{from{opacity:0}to{opacity:1}}
.card{display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center;max-width:210px}
.card h3{margin:0;font-family:'Jost','Satoshi',sans-serif;font-weight:500;font-size:24px;letter-spacing:-.01em;color:${CREAM}}
.card p{margin:0;font-size:14px;font-weight:600;line-height:1.4;color:#E4F2EB;text-wrap:balance}
.card .meta{font-size:12px;font-weight:700;color:#B9D3C6}
.big{font-family:'Jost','Satoshi',sans-serif;font-weight:500;font-size:38px;line-height:1;font-variant-numeric:tabular-nums}
.row{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.btn{appearance:none;border:0;cursor:pointer;height:40px;padding:0 18px;border-radius:999px;background:linear-gradient(180deg,#3FD3A5 0%,#2EBD8F 100%);color:#062018;font-size:14px;font-weight:800;box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 6px 16px rgba(46,189,143,.3);transition:transform 120ms ease}
.btn:active{transform:scale(.96)}
.btn.ghost{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.22);color:#FFFFFF;box-shadow:none}
.hint{margin-top:8px;text-align:center;font-size:12px;font-weight:700;color:#B9D3C6}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
`;

class OrbitCatch extends HTMLElement {
  set tokens(v) { this._raw = v; }
  get tokens() { return this._raw; }

  connectedCallback() {
    if (this._built) return;
    this._built = true;
    this.rm = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.sound = false;
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>${CSS}</style>
      <div class="hud">
        <div class="stat"><small>Score</small><b id="score">0</b></div>
        <div class="stat"><small>Time</small><b id="time">0:30</b></div>
        <div class="stat"><small>Attempts</small><div class="lives" id="lives" role="img" aria-label="3 attempts left"><span class="life"></span><span class="life"></span><span class="life"></span></div></div>
        <span class="sp"></span>
        <button class="ib" id="pauseBtn" type="button" aria-label="Pause" disabled>${ic('pause')}</button>
        <button class="ib" id="soundBtn" type="button" aria-label="Sound" aria-pressed="false">${ic('soundOff')}</button>
        <button class="ib" id="closeBtn" type="button" aria-label="Close game">${ic('x')}</button>
      </div>
      <div class="stage" id="stage" tabindex="0" role="application" aria-label="Orbit Catch. Press Space or tap to launch a pulse.">
        <svg class="board" viewBox="0 0 300 300" aria-hidden="true">
          <defs>
            <radialGradient id="g"><stop offset="0" stop-color="${MINT}" stop-opacity=".28"/><stop offset="1" stop-color="${MINT}" stop-opacity="0"/></radialGradient>
            <filter id="glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
          </defs>
          <circle cx="150" cy="150" r="100" fill="url(#g)"/>
          ${RADII.map(r => `<circle cx="150" cy="150" r="${r}" fill="none" stroke="rgba(255,255,255,.24)" stroke-width="1.4" stroke-dasharray="0.1 6" stroke-linecap="round"/>`).join('')}
          <g id="aim" opacity="0">
            <line id="guide" x1="150" y1="150" x2="150" y2="10" stroke="${MINT_T}" stroke-opacity=".32" stroke-width="1.5" stroke-dasharray="2 5" stroke-linecap="round"/>
            <path id="arrow" d="M0 -6 L11 0 L0 6 Z" fill="${MINT_T}"/>
          </g>
          <g id="links"></g>
          <g id="toks"></g>
          <g id="pulses"></g>
          <circle id="shot" r="5" fill="${MINT_T}" filter="url(#glow)" opacity="0"/>
          <circle cx="150" cy="150" r="22" fill="#0F2C21" stroke="${MINT}" stroke-width="1.5"/>
          <circle cx="150" cy="150" r="27" fill="none" stroke="${MINT}" stroke-opacity=".18" stroke-width="4"/>
          <text x="150" y="154.5" text-anchor="middle" font-size="12" font-weight="700" fill="#CFEFE2" style="font-family:inherit">You</text>
        </svg>
        <div class="fx" id="fx"></div>
        <div class="overlay" id="intro">
          <div class="card">
            <h3>Orbit Catch</h3>
            <p>Tap to launch. Connect your circle.</p>
            <span class="meta">9 brands · 30 seconds · 3 misses</span>
            <button class="btn" id="startBtn" type="button">Start</button>
          </div>
        </div>
        <div class="overlay" id="paused" hidden>
          <div class="card"><h3>Paused</h3><button class="btn" id="resumeBtn" type="button">Resume</button></div>
        </div>
        <div class="overlay" id="end" hidden>
          <div class="card">
            <h3 id="endTitle">Nice connections</h3>
            <span class="big" id="endScore">0</span>
            <span class="meta" id="endConn">0 of 9 connections</span>
            <div class="row"><button class="btn" id="againBtn" type="button">Play again</button><button class="btn ghost" id="backBtn" type="button">Back to brands</button></div>
          </div>
        </div>
      </div>
      <div class="hint">Tap, click or press Space to launch</div>
      <div class="sr" aria-live="polite" id="live"></div>`;
    const $ = id => root.getElementById(id);
    Object.assign(this, { $score: $('score'), $time: $('time'), $lives: $('lives'), $pause: $('pauseBtn'), $sound: $('soundBtn'), $stage: $('stage'), $aim: $('aim'), $arrow: $('arrow'), $guide: $('guide'), $links: $('links'), $toks: $('toks'), $pulses: $('pulses'), $shot: $('shot'), $fx: $('fx'), $intro: $('intro'), $paused: $('paused'), $end: $('end'), $live: $('live') });

    this.on($('startBtn'), 'click', () => this.start());
    this.on($('againBtn'), 'click', () => this.start());
    this.on($('backBtn'), 'click', () => this.close());
    this.on($('closeBtn'), 'click', () => this.close());
    this.on($('resumeBtn'), 'click', () => this.resume());
    this.on(this.$pause, 'click', () => this.phase === 'play' ? this.pause() : this.resume());
    this.on(this.$sound, 'click', () => { this.sound = !this.sound; this.$sound.setAttribute('aria-pressed', String(this.sound)); this.$sound.innerHTML = ic(this.sound ? 'soundOn' : 'soundOff'); this.$sound.setAttribute('aria-label', this.sound ? 'Sound on' : 'Sound off'); });
    this.on(this.$stage, 'pointerdown', e => { if (e.target.closest && e.target.closest('.overlay')) return; if (this.phase === 'play') { e.preventDefault(); this.$stage.focus({ preventScroll: true }); this.fire(); } });
    this.on(this.$stage, 'keydown', e => { if ((e.code === 'Space' || e.key === ' ') && !(e.target.closest && e.target.closest('button'))) { e.preventDefault(); if (this.phase === 'play') this.fire(); } });
    this.on(document, 'keydown', e => { if (e.key === 'Escape') { e.preventDefault(); this.close(); } });
    this.on(document, 'visibilitychange', () => { if (document.hidden && this.phase === 'play') this.pause(); });

    this.reset();
    this.phase = 'intro';
    this.draw();
    requestAnimationFrame(() => $('startBtn').focus({ preventScroll: true }));
  }

  disconnectedCallback() {
    cancelAnimationFrame(this.raf);
    (this._ls || []).forEach(([t, ev, fn]) => t.removeEventListener(ev, fn));
    this._ls = [];
    this._built = false;
    if (this.ac) { try { this.ac.close(); } catch (e) {} }
  }

  on(t, ev, fn) { t.addEventListener(ev, fn); (this._ls = this._ls || []).push([t, ev, fn]); }

  readTokens() {
    let raw = this._raw ?? this.getAttribute('tokens');
    if (typeof raw === 'string') { try { raw = JSON.parse(raw); } catch (e) { raw = []; } }
    const list = Array.isArray(raw) ? raw.slice(0, 9) : [];
    while (list.length < 9) list.push({ ini: '+', name: 'New brand', ghost: true });
    return list;
  }

  reset() {
    const src = this.readTokens();
    this.toks = src.map((t, i) => {
      const ring = Math.floor(i / 3), k = i % 3;
      return { ...t, ring, a: (OFF[ring] + k * 120) * Math.PI / 180, r: SIZE[ring], on: false };
    });
    Object.assign(this, { score: 0, misses: 0, streak: 0, left: ROUND, el: 0, aim: -Math.PI / 2, shot: null, links: [] });
    this.$toks.innerHTML = ''; this.$links.innerHTML = ''; this.$pulses.innerHTML = ''; this.$fx.innerHTML = '';
    this.toks.forEach(t => {
      const g = document.createElementNS(NS, 'g');
      const ghost = t.ghost;
      g.innerHTML = `<circle class="ring" r="${t.r + 4}" fill="none" stroke="${MINT}" stroke-width="2" opacity="0"/>
        <circle r="${t.r}" fill="${ghost ? 'rgba(255,255,255,.04)' : (t.bg || '#E4F2EB')}" stroke="${ghost ? 'rgba(255,255,255,.45)' : 'rgba(255,255,255,.75)'}" stroke-width="1.5" ${ghost ? 'stroke-dasharray="3 3"' : ''}/>
        <text y="${t.ini.length > 1 ? 3.8 : 4.2}" text-anchor="middle" font-size="${ghost ? 14 : 11}" font-weight="600" fill="${ghost ? 'rgba(255,255,255,.7)' : (t.fg || INK)}" style="font-family:'Jost','Satoshi',sans-serif;letter-spacing:.02em">${t.ini}</text>
        <g class="badge" opacity="0" transform="translate(${(t.r * 0.72).toFixed(1)} ${(-t.r * 0.72).toFixed(1)})"><circle r="6.5" fill="${MINT}" stroke="${INK}" stroke-width="1.5"/><path d="M-2.8 0.2 L-0.8 2.2 L3 -2" fill="none" stroke="${INK}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></g>`;
      this.$toks.appendChild(g);
      t.g = g; t.ringEl = g.querySelector('.ring'); t.badge = g.querySelector('.badge');
    });
    this.$shot.setAttribute('opacity', '0');
    this.hud();
  }

  pos(t) { const R = RADII[t.ring]; return [C + R * Math.cos(t.a), C + R * Math.sin(t.a)]; }

  start() {
    this.reset();
    this.$intro.hidden = true; this.$end.hidden = true; this.$paused.hidden = true;
    this.$aim.setAttribute('opacity', '1');
    this.$pause.disabled = false;
    this.phase = 'play';
    this.say('Round started. 30 seconds.');
    this.$stage.focus({ preventScroll: true });
    this.loop();
  }
  pause() {
    if (this.phase !== 'play') return;
    this.phase = 'pause'; cancelAnimationFrame(this.raf);
    this.$paused.hidden = false; this.setPauseIcon();
    this.shadowRoot.getElementById('resumeBtn').focus({ preventScroll: true });
  }
  resume() {
    if (this.phase !== 'pause') return;
    this.phase = 'play'; this.$paused.hidden = true; this.setPauseIcon();
    this.$stage.focus({ preventScroll: true });
    this.loop();
  }
  setPauseIcon() { const p = this.phase === 'pause'; this.$pause.innerHTML = ic(p ? 'play' : 'pause'); this.$pause.setAttribute('aria-label', p ? 'Resume' : 'Pause'); }
  close() {
    cancelAnimationFrame(this.raf); this.phase = 'closed';
    if (typeof this.onClose === 'function') this.onClose();
    this.dispatchEvent(new CustomEvent('orbitclose', { bubbles: true, composed: true }));
  }

  loop() {
    cancelAnimationFrame(this.raf);
    let last = performance.now();
    const tick = now => {
      if (this.phase !== 'play') return;
      const dt = Math.min(0.05, (now - last) / 1000); last = now;
      this.step(dt, now);
      this.draw(now);
      if (this.phase === 'play') this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  step(dt, now) {
    this.el += dt;
    const ramp = 1 + 0.5 * Math.min(1, this.el / ROUND);
    this.toks.forEach(t => { t.a += SPEED[t.ring] * ramp * dt; });
    this.aim = (this.aim + AIM_SPEED * dt) % (Math.PI * 2);
    const prevLeft = Math.ceil(this.left);
    this.left = Math.max(0, this.left - dt);
    if (Math.ceil(this.left) !== prevLeft) this.hud();

    const s = this.shot;
    if (s) {
      const n = 3;
      for (let i = 0; i < n && this.shot; i++) {
        s.x += s.vx * dt / n; s.y += s.vy * dt / n;
        for (const t of this.toks) {
          if (t.on) continue;
          const [tx, ty] = this.pos(t);
          if (Math.hypot(s.x - tx, s.y - ty) <= t.r + HIT_PAD) { this.hit(t, now); break; }
        }
        if (this.shot && Math.hypot(s.x - C, s.y - C) > 152) this.miss(s);
      }
    }
    if (this.phase === 'play' && this.left <= 0) this.end();
  }

  fire() {
    if (this.shot || this.phase !== 'play') return;
    const a = this.aim, cx = Math.cos(a), cy = Math.sin(a);
    this.shot = { x: C + cx * 26, y: C + cy * 26, vx: cx * SHOT_SPEED, vy: cy * SHOT_SPEED };
    this.blip(520, 0.05);
  }

  hit(t, now) {
    this.shot = null;
    t.on = true; this.streak++;
    const base = PTS[t.ring], bonus = this.streak > 1 ? Math.min(100, 25 * (this.streak - 1)) : 0;
    this.score += base + bonus;
    const [x, y] = this.pos(t);
    this.float(x, y - t.r - 6, '+' + base, '');
    if (bonus) this.float(x, y - t.r + 10, `+${bonus} streak`, 'bonus', 140);
    const line = document.createElementNS(NS, 'line');
    line.setAttribute('stroke', MINT_T); line.setAttribute('stroke-width', '2'); line.setAttribute('stroke-linecap', 'round'); line.setAttribute('filter', 'url(#glow)');
    this.$links.appendChild(line);
    this.links.push({ t, el: line, t0: now });
    t.ringEl.setAttribute('opacity', '1'); t.badge.setAttribute('opacity', '1');
    if (!this.rm) {
      const p = document.createElementNS(NS, 'circle');
      p.setAttribute('cx', x); p.setAttribute('cy', y); p.setAttribute('r', t.r); p.setAttribute('fill', 'none'); p.setAttribute('stroke', MINT_T); p.setAttribute('stroke-width', '2');
      this.$pulses.appendChild(p);
      const t1 = performance.now();
      const grow = n => { const k = Math.min(1, (n - t1) / 520); p.setAttribute('r', (t.r + 16 * k).toFixed(1)); p.setAttribute('opacity', (0.9 * (1 - k)).toFixed(2)); if (k < 1) requestAnimationFrame(grow); else p.remove(); };
      requestAnimationFrame(grow);
    }
    const n = this.toks.filter(x => x.on).length;
    this.say(`Connected ${t.name}. ${n} of 9.`);
    this.blip(660 + this.streak * 60, 0.09);
    this.hud();
    if (n === 9) this.end();
  }

  miss(s) {
    this.shot = null; this.misses++; this.streak = 0;
    const a = Math.atan2(s.y - C, s.x - C);
    this.float(C + Math.cos(a) * 128, C + Math.sin(a) * 128, 'Miss', 'miss');
    this.say(`Missed. ${LIVES - this.misses} attempt${LIVES - this.misses === 1 ? '' : 's'} left.`);
    this.blip(200, 0.12, 'triangle');
    this.hud();
    if (this.misses >= LIVES) this.end();
  }

  end() {
    if (this.phase === 'over') return;
    this.phase = 'over'; cancelAnimationFrame(this.raf);
    this.shot = null; this.draw(performance.now());
    this.$aim.setAttribute('opacity', '0');
    this.$pause.disabled = true;
    const n = this.toks.filter(t => t.on).length, sr = this.shadowRoot;
    sr.getElementById('endTitle').textContent = n === 9 ? 'Circle complete' : 'Nice connections';
    sr.getElementById('endScore').textContent = this.score.toLocaleString('en-IN');
    sr.getElementById('endConn').textContent = `${n} of 9 connections`;
    this.$end.hidden = false;
    this.say(`${n === 9 ? 'Circle complete' : 'Round over'}. Score ${this.score}. ${n} of 9 connections.`);
    requestAnimationFrame(() => sr.getElementById('againBtn').focus({ preventScroll: true }));
  }

  draw(now = performance.now()) {
    this.toks.forEach(t => { const [x, y] = this.pos(t); t.g.setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)})`); });
    const a = this.aim, cx = Math.cos(a), cy = Math.sin(a);
    this.$guide.setAttribute('x1', (C + cx * 46).toFixed(2)); this.$guide.setAttribute('y1', (C + cy * 46).toFixed(2));
    this.$guide.setAttribute('x2', (C + cx * 146).toFixed(2)); this.$guide.setAttribute('y2', (C + cy * 146).toFixed(2));
    this.$arrow.setAttribute('transform', `translate(${(C + cx * 33).toFixed(2)} ${(C + cy * 33).toFixed(2)}) rotate(${(a * 180 / Math.PI).toFixed(1)})`);
    this.$arrow.setAttribute('opacity', this.shot ? '0.4' : '1');
    if (this.shot) { this.$shot.setAttribute('cx', this.shot.x.toFixed(2)); this.$shot.setAttribute('cy', this.shot.y.toFixed(2)); this.$shot.setAttribute('opacity', '1'); }
    else this.$shot.setAttribute('opacity', '0');
    this.links = this.links.filter(l => {
      const age = (now - l.t0) / 1000, k = 1 - age / 0.8;
      if (k <= 0) { l.el.remove(); return false; }
      const [x, y] = this.pos(l.t);
      l.el.setAttribute('x1', C); l.el.setAttribute('y1', C); l.el.setAttribute('x2', x.toFixed(2)); l.el.setAttribute('y2', y.toFixed(2));
      l.el.setAttribute('opacity', k.toFixed(2));
      return true;
    });
  }

  hud() {
    this.$score.textContent = this.score.toLocaleString('en-IN');
    const s = Math.ceil(this.left);
    this.$time.textContent = `0:${String(s).padStart(2, '0')}`;
    this.$time.classList.toggle('low', s <= 5 && this.phase === 'play');
    const rem = LIVES - this.misses;
    [...this.$lives.children].forEach((d, i) => d.classList.toggle('used', i >= rem));
    this.$lives.setAttribute('aria-label', `${rem} attempt${rem === 1 ? '' : 's'} left`);
  }

  float(x, y, text, cls, delay = 0) {
    const d = document.createElement('div');
    d.className = 'float ' + cls; d.textContent = text;
    d.style.left = (x / 3) + '%'; d.style.top = (y / 3) + '%';
    if (this.rm) d.style.animationName = 'none';
    if (delay && !this.rm) d.style.animationDelay = delay + 'ms', d.style.opacity = '0';
    this.$fx.appendChild(d);
    setTimeout(() => d.remove(), this.rm ? 900 : 1000 + delay);
  }

  say(t) { this.$live.textContent = t; }

  blip(freq, dur, type = 'sine') {
    if (!this.sound) return;
    try {
      this.ac = this.ac || new (window.AudioContext || window.webkitAudioContext)();
      const o = this.ac.createOscillator(), g = this.ac.createGain(), t = this.ac.currentTime;
      o.type = type; o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.08, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(this.ac.destination); o.start(t); o.stop(t + dur + 0.02);
    } catch (e) {}
  }
}
customElements.define('orbit-catch', OrbitCatch);
})();
