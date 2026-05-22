/* -------------------------------------------------------------
 * BPBアイテムキメラガチャ - プレミアム・インタラクションシステム
 * Web Audio API, Canvas Confetti, Slot Animation, Dual Theme
 * ------------------------------------------------------------- */

// --- プリセットデータ定義 ---
const PRESETS = {
    standard: {
        group1: ["アイス", "アナグマの", "あまりにも大きすぎる", "アメシスト", "アメシストの", "アリスイの", "イバラの", "ウイング", "ウエスト", "ウルフ", "エサの", "エッグス", "エネルギー", "エメラルド", "エメラルドの", "オイル", "カード", "カードの", "ガール", "カエル", "カップ", "カップケーキ", "キノコ", "キンキラ", "キング", "グラグラ", "クリティカルの", "コインの", "ゴースト", "コールド", "ゴールド", "こだまする", "ささやきベラドンナの", "サファイア", "サファイアの", "サブスク高級", "さらなる", "サルでもわかる", "サンダー", "サンドバッグ", "シカ神の", "シャーマンの", "ショート", "スタミナ", "スタンクスの", "スチール", "ストーン", "スノー", "スパイシー", "スペードの", "セイウチの", "ゾウの", "ダーク", "ターボ", "タカの", "ダブル", "ダンシング", "チーズ", "チェーン", "チェス", "チェストナット", "ちょっと", "つらぬきキバの", "つらぬきの", "つる織り", "デス", "テスラ", "トウガラシ", "トースト", "ドク", "トゲつき", "トゲの", "ドラゴン", "ドラゴンの", "ドラゴン革の", "トラの", "ドングリの", "ニンジン", "ネコの", "ネズミ", "ノコ刃の", "ハートの", "ハイパー", "ハイヒーロー", "ハイヘルス", "ハイマナ", "パインの", "パズル", "ハッピー", "バネ式", "ハヤブサの", "ヒート", "ヒーロー", "ひとつかみの", "フォルトゥナの", "フォレスト", "フクロウの", "ブタちゃん", "プラスチック", "プラチナ", "ブラッディ", "プリズム", "ブレイズ", "フレイム", "フレンドリーな", "フローズン", "フロスト", "ブロッコリー", "ベラドンナの", "ベリーロング", "ヘルス", "ポイズン", "ポーション", "ホーリー", "マークス", "マジック", "マナ", "マナ喰らいの", "ミスター", "ミセス", "メイジの", "メカ", "メガ", "もっと", "モノ", "ユグドラシルの", "ユニークな", "ライト", "リーフ", "リス", "ルビー", "ルビーの", "レインボー", "レリック", "レンジャーの", "ローズ", "愛情の", "悪鬼の", "悪党の", "安定した", "暗黒の", "闇の", "英雄の", "疫毒の", "炎トカゲの", "炎の", "王の", "改善の", "殻の", "革の", "学者の", "活力の", "完璧な", "棺型", "輝く", "輝ける", "飢えたる", "偽りの", "吸血の", "吸血鬼の", "供物", "凶悪鬼の", "強疫毒の", "極吸血の", "均衡の", "金の", "苦痛の", "愚者の", "欠けた", "血の", "月の", "古代の", "光輝の", "幸運の", "幸運泥棒の", "幸福の", "硬肌の", "鋼の", "鋼鉄の", "剛力の", "黒の", "黒曜の", "才気の", "財宝の", "施し", "死神の", "至高の", "歯車", "歯車仕掛けの", "持続の", "時間膨張", "自然の", "煮え立つ", "灼炎の", "灼熱の", "守護の", "呪われし", "呪文の", "臭い立つ", "従業員の", "傷物の", "神聖なる", "神秘の", "迅速の", "水の", "水銀の", "生命の", "精霊の", "聖なる", "青セージの", "石の", "石炭の", "石入り", "赤ランの", "雪の", "全身", "聡明な", "憎たらしい", "太陽の", "堕落せし", "堕落の", "大食の", "鍛冶屋の", "超", "超硬肌の", "天使の", "電動", "怒れる", "凍てつく", "毒蛇の", "突きキバの", "燃えさかる", "燃える", "破滅の", "白の", "白ユリの", "爆ぜる", "秘術の", "氷の", "氷結魔法の", "瓶詰めの", "不安定な", "不気味な", "不協和の", "不屈の", "富の", "普通の", "武装した聡明な", "武装した勇敢な", "武装した力持ちの", "便利", "魔神の", "魔導の", "魔法の", "未鑑定の", "未知の", "無の", "無傷の", "木の", "夜闇の", "野生の", "癒さずの", "癒やしの", "優美なる", "勇敢な", "勇気の", "羊飼いの", "雷の", "竜鱗の", "力持ちの", "恋人の", "狼の", "貪食の"],
        group2: ["アーチャー", "アーマー", "アックス", "アミュレット", "アメシスト", "アリスイ", "ウィップ", "ウーマン", "エース", "エッグ", "エメラルド", "エレメンタル", "オーブ", "カード", "ガエル", "かたまり", "カバン", "カリバー", "キス", "キューブ", "キング", "クイーン", "クリスタル", "グレートソード", "グレネード", "クロー", "クローバー", "グローブ", "ケーキ", "ケース", "コイル", "ゴーレム", "サファイア", "シェフ", "シェリー", "スキル", "ストラグルズ", "スピア", "スフィア", "スラバート", "セイバー", "セット", "ソード", "たいまつ", "ダガー", "チョーカー", "つるぎ", "デッキ", "トーテム", "トパーズ", "ドラゴン", "ドレイク", "ナイト", "ハート", "ハーブ", "バイト", "バスケット", "パズルバッグ", "バッグ", "バッジ", "バット", "バナナ", "ハリネズミ", "パワー", "ハンドバッグ", "ハンマー", "ビショップ", "ピニャータ", "ブーツ", "フェニックス", "ブタちゃん", "ブッパナシネーター", "フラスコ", "ブラッドソーン", "フラワー", "プラン", "フレイム", "ヘアコーム", "ベル", "ベルト", "ヘルム", "ボウ", "ポーション", "ポーチ", "ボード", "ポーン", "ボックス", "ボム", "ホロカード", "マスター", "ミラー", "ムチ", "ユニーク", "ランタン", "ランプ", "ルーク", "ルーン", "ルビー", "レイピア", "レインボー", "ロータス", "ロングソード", "ワンド", "影毒弓", "王冠", "王子", "仮面", "加護弓", "加速器", "火", "火トカゲ", "牙", "会員カード", "外套", "鎧", "核", "殻", "覚醒", "鎌", "冠", "巻物", "願い弓", "旗印", "儀式", "弓矢", "卿", "君", "経典", "荊棘", "剣", "砂", "再構築器", "皿", "山", "子狼", "指輪", "時計", "手引き", "首飾り", "盾", "杖", "寝床", "心臓", "制服", "星", "盛り合わせ", "精霊", "石：デス", "石：フリーズ", "石：フレイム", "石炭", "雪ダルマ", "存在", "袋", "大鎌", "短弓", "鍛冶", "貯金箱", "爪楊枝", "怒り", "毒弓", "鍋", "年代記：木々", "農園", "箱", "百科事典", "壁", "変換", "宝箱", "帽子", "帽子・ハロルド", "棒", "防備", "防壁", "命", "紋章", "矢", "雄叫び", "幼竜", "容器", "葉", "雷", "力", "力を！", "棘"]
    }
};

// --- アプリケーション状態 ---
let activeGroup1 = [...PRESETS.standard.group1];
let activeGroup2 = [...PRESETS.standard.group2];
let isSpinning = false;
let soundEnabled = true;
let normalRollCount = parseInt(localStorage.getItem('normal_roll_count') || '0', 10);
let totalRollCount = parseInt(localStorage.getItem('total_roll_count') || '0', 10);
let lockedWord1 = null;
let lockedWord2 = null;
let idleTimer = null;
let bookmarks = JSON.parse(localStorage.getItem('gacha_bookmarks') || '[]');


// --- 世界累計カウンター同期機能 (CounterAPI) ---
const COUNTER_API_URL = "https://api.counterapi.dev/v1/katad-apps/bpb-chimera-gacha-spins";

async function fetchGlobalSpins() {
    try {
        const response = await fetch(COUNTER_API_URL);
        if (!response.ok) throw new Error("Fetch global spins failed");
        const data = await response.json();
        const count = typeof data.count === 'number' ? data.count : data.value;
        if (typeof count !== 'number') throw new Error("Invalid value from API");
        updateGlobalCounterUI(count);
    } catch (e) {
        console.warn("Global counter fetch failed, setting to offline.", e);
        // エラー時はダミー数値ではなく 'ー' を表示
        updateGlobalCounterUI("ー");
        setCounterOfflineUI();
    }
}

async function incrementGlobalSpins() {
    try {
        const response = await fetch(`${COUNTER_API_URL}/up`);
        if (!response.ok) throw new Error("Increment global spins failed");
        const data = await response.json();
        const count = typeof data.count === 'number' ? data.count : data.value;
        if (typeof count !== 'number') throw new Error("Invalid value from API");
        updateGlobalCounterUI(count);
    } catch (e) {
        console.warn("Global counter increment failed, setting to offline.", e);
        // エラー時はダミー数値ではなく 'ー' を表示
        updateGlobalCounterUI("ー");
        setCounterOfflineUI();
    }
}

function setCounterOfflineUI() {
    const badge = document.getElementById('global-counter');
    if (badge) {
        badge.classList.add('offline');
    }
}

function updateGlobalCounterUI(value) {
    const el = document.getElementById('global-counter-value');
    const badge = document.getElementById('global-counter');
    if (el) {
        if (typeof value === 'number') {
            if (badge) badge.classList.remove('offline');
            const formatted = value.toLocaleString();
            el.innerHTML = formatted.split('').map(char => {
                if (char === ',') {
                    return `<span class="counter-comma">,</span>`;
                } else {
                    return `<span class="counter-digit">${char}</span>`;
                }
            }).join('');
        } else {
            if (badge) badge.classList.add('offline');
            // undefinedやnull、文字列の 'undefined' が渡された場合は確実に 'ー' にフォールバックする
            const displayValue = (value === undefined || value === null || value === 'undefined' || value === '') ? "ー" : value;
            el.innerHTML = `<span class="counter-digit offline-dash">${displayValue}</span>`;
        }
    }
}

// ローカルの全ロール回数のカウント
function incrementTotalRolls() {
    totalRollCount++;
    localStorage.setItem('total_roll_count', totalRollCount);
}

// 5秒放置検知によるTips自動表示
function resetIdleTimer() {
    if (lockedWord1 || lockedWord2) {
        if (idleTimer) {
            clearTimeout(idleTimer);
            idleTimer = null;
        }
        return;
    }
    if (idleTimer) {
        clearTimeout(idleTimer);
    }
    idleTimer = setTimeout(() => {
        if (isSpinning) {
            resetIdleTimer(); // スピン中は5秒後に延期
            return;
        }
        if (lockedWord1 || lockedWord2) {
            return;
        }
        const toast = document.getElementById('toast');
        if (toast && !toast.classList.contains('hidden') && toast.textContent.includes('高速モード')) {
            resetIdleTimer(); // 高速モード案内が表示されている場合は延期
            return;
        }
        showToast("💡 語群の単語をクリックするとスロットを固定できます！", 0);
    }, 5000);
}

// --- Web Audio API 音響制御 ---
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// 効果音：ティック音（ドラムロール中）
function playTickSound(frequency = 800, volume = 0.05) {
    if (!soundEnabled) return;
    initAudio();
    try {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(frequency, audioCtx.currentTime);
        // 急激な減衰でパーカッシブな音を作る
        gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);

        osc.start();
        osc.stop(audioCtx.currentTime + 0.08);
    } catch (e) {
        console.error("Audio error", e);
    }
}

// 効果音：ファンファーレ（決定時）
function playSuccessSound() {
    if (!soundEnabled) return;
    initAudio();
    try {
        const now = audioCtx.currentTime;
        // 和音（Cコード：ド・ミ・ソ・ド）
        const notes = [261.63, 329.63, 392.00, 523.25]; 
        notes.forEach((freq, index) => {
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + index * 0.08);
            
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(0.08, now + index * 0.08 + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.8 + index * 0.08);

            osc.start(now + index * 0.08);
            osc.stop(now + 0.8 + index * 0.08);
        });
    } catch (e) {
        console.error("Audio error", e);
    }
}

// --- 紙吹雪エフェクト (Canvas Confetti) ---
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let animationId = null;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class ConfettiParticle {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height * 0.7; // ガチャボタンの高さ付近から吹き出す
        this.size = Math.random() * 8 + 6;
        this.color = ['#1b4332', '#d62828', '#f4a261', '#ffffff', '#52b788'][Math.floor(Math.random() * 5)];
        this.speedX = Math.random() * 15 - 7.5;
        this.speedY = Math.random() * -20 - 10; // 上方向への吹き出し
        this.gravity = 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
        this.opacity = 1;
        this.decay = Math.random() * 0.015 + 0.01;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += this.gravity;
        this.rotation += this.rotationSpeed;
        this.opacity -= this.decay;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

function spawnConfetti() {
    // 既存のループをクリア
    cancelAnimationFrame(animationId);
    particles = [];
    
    // 150個の粒子を生成
    for (let i = 0; i < 150; i++) {
        particles.push(new ConfettiParticle());
    }
    
    updateConfetti();
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles = particles.filter(p => p.opacity > 0);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    
    if (particles.length > 0) {
        animationId = requestAnimationFrame(updateConfetti);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// --- スロットアニメーションロジック ---

// スロットに単語アイテムを動的にロードする
function initSlotStrips() {
    const strip1 = document.getElementById('strip-1');
    const strip2 = document.getElementById('strip-2');

    // 初期状態では、最初の単語を表示
    strip1.innerHTML = `<div class="slot-item">${activeGroup1[0]}</div>`;
    strip2.innerHTML = `<div class="slot-item">${activeGroup2[0]}</div>`;
}

// BPB風の価格を計算 (ゴールド単位でのショップ販売価格)
function calculateBPBGold(word1, word2) {
    // 単語の長さやハッシュに基づいて、3Gから25G程度の価格を生成
    const base = (word1.length + word2.length) * 3 + 4;
    const choices = [3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 18, 22];
    let gold = choices[base % choices.length];
    
    // 特定のレアな接頭辞で価格を上げる
    if (word1.includes("堕天") || word1.includes("聖なる") || word1.includes("ギガ") || word1.includes("ドラゴン")) {
        gold += 5;
    }
    return `${gold} ゴールド`;
}

// スロット単一の回転処理
function animateSlot(stripId, words, delayStop, onComplete) {
    const strip = document.getElementById(stripId);
    
    // アニメーション用に長い単語リストを構築する
    // 回転中に見えるダミーを30個ほどシャッフルして結合
    const totalDummies = 25;
    let dummyWords = [];
    for (let i = 0; i < totalDummies; i++) {
        dummyWords.push(words[Math.floor(Math.random() * words.length)]);
    }
    
    // 最終決定されるワードを末尾にセット
    const finalWord = words[Math.floor(Math.random() * words.length)];
    dummyWords.push(finalWord);

    // HTMLへの反映
    strip.innerHTML = dummyWords.map(w => `<div class="slot-item blur">${w}</div>`).join('');
    
    const itemHeight = 112; // CSSで指定した高さ
    const totalHeight = dummyWords.length * itemHeight;
    
    // アニメーション設定
    let currentY = 0;
    let speed = 25; // 初期回転スピード
    let frame = 0;
    const targetY = -(dummyWords.length - 1) * itemHeight;
    let stopping = false;

    // ドラムの物理シミュレーションループ
    function spinLoop() {
        frame++;
        
        // ティック音（スピードに応じて鳴らす間隔を調整）
        if (frame % Math.max(1, Math.round(30 / speed)) === 0 && speed > 2) {
            playTickSound(600 + speed * 10, 0.03);
        }

        if (stopping) {
            // 残りの距離を計算 (currentY は負の値、targetY も負の値)
            const remainingDistance = currentY - targetY; // 例: -100 - (-2800) = 2700
            
            // 残り距離に応じたイージング減速 (最低速度 1.5、最高速度 25)
            speed = Math.min(25, Math.max(1.5, remainingDistance * 0.08));
            currentY -= speed;
            
            // ターゲット位置を通り過ぎるか、十分に近づいたら完全に停止
            if (currentY <= targetY) {
                currentY = targetY;
                // ブラー解除して単一の決定ワードのみ表示
                strip.innerHTML = `<div class="slot-item">${finalWord}</div>`;
                strip.style.transform = 'translateY(0)';
                playTickSound(400, 0.1); // カチッという決定音
                onComplete(finalWord);
                return;
            }
        } else {
            // 定速回転
            currentY -= speed;
            if (currentY <= targetY + itemHeight * 2) {
                // ループさせて無限スクロールのように見せる
                currentY = 0;
            }
        }

        strip.style.transform = `translateY(${currentY}px)`;
        requestAnimationFrame(spinLoop);
    }

    // 一定時間後に減速フェーズへ移行
    setTimeout(() => {
        currentY = 0; // スピード調整のために開始位置をリセット（滑らかな減速距離を担保）
        stopping = true;
    }, delayStop);

    requestAnimationFrame(spinLoop);
}

// ガチャ全体を回すメイン処理
function spinGacha() {
    if (isSpinning) return;

    // ガチャを回した瞬間に、アンロックガイドなどの常時表示トーストを非表示にする
    document.getElementById('toast').classList.add('hidden');

    // 世界累計ガチャ回数を非同期で+1加算（結果を待たずにガチャを回す）
    incrementGlobalSpins();

    const fastModeActive = document.getElementById('fast-mode-checkbox')?.checked || false;

    if (fastModeActive) {
        // --- 高速モード（即座に結果を出力） ---
        const result1 = lockedWord1 || activeGroup1[Math.floor(Math.random() * activeGroup1.length)];
        const result2 = lockedWord2 || activeGroup2[Math.floor(Math.random() * activeGroup2.length)];
        const resultText = result1 + result2;
        const price = calculateBPBGold(result1, result2);

        // スロット表示を即座に決定値に更新してブラーなし
        document.getElementById('strip-1').innerHTML = `<div class="slot-item">${result1}</div>`;
        document.getElementById('strip-2').innerHTML = `<div class="slot-item">${result2}</div>`;
        document.getElementById('strip-1').style.transform = 'translateY(0)';
        document.getElementById('strip-2').style.transform = 'translateY(0)';

        // 結果の描画
        document.getElementById('result-text').textContent = resultText;
        document.getElementById('result-price').textContent = price;
        document.getElementById('result-section').classList.remove('hidden');
        updateBookmarkButtonUI(resultText);


        // 効果音と紙吹雪
        playSuccessSound();
        spawnConfetti();

        // 履歴追加
        addToHistory(resultText, price);
        incrementTotalRolls();
        resetIdleTimer();
        return;
    }

    // --- 両スロット固定時の即時処理 ---
    if (lockedWord1 && lockedWord2) {
        const resultText = lockedWord1 + lockedWord2;
        const price = calculateBPBGold(lockedWord1, lockedWord2);

        // スロット表示の確定
        document.getElementById('strip-1').innerHTML = `<div class="slot-item">${lockedWord1}</div>`;
        document.getElementById('strip-2').innerHTML = `<div class="slot-item">${lockedWord2}</div>`;
        document.getElementById('strip-1').style.transform = 'translateY(0)';
        document.getElementById('strip-2').style.transform = 'translateY(0)';

        // 結果の描画
        document.getElementById('result-text').textContent = resultText;
        document.getElementById('result-price').textContent = price;
        document.getElementById('result-section').classList.remove('hidden');
        updateBookmarkButtonUI(resultText);


        // 演出と履歴
        playSuccessSound();
        spawnConfetti();
        addToHistory(resultText, price);
        incrementTotalRolls();
        resetIdleTimer();

        // 通常ロール回数のカウントと高速モード解放判定
        if (normalRollCount < 3) {
            normalRollCount++;
            localStorage.setItem('normal_roll_count', normalRollCount);
            if (normalRollCount === 3) {
                const container = document.getElementById('fast-mode-container');
                container.classList.add('highlight-glow');
                setTimeout(() => {
                    showToast("💡 右上のヘッダーに、演出をスキップして即時に結果を出す「高速モード」が追加されました！ONにすると待ち時間ゼロで回せます！", 0);
                }, 800);
            }
        }
        return;
    }

    // --- 通常演出モード ---
    isSpinning = true;

    // UI状態の更新
    const spinBtn = document.getElementById('spin-btn');
    spinBtn.disabled = true;
    spinBtn.classList.add('spinning');
    document.getElementById('result-section').classList.add('hidden');
    
    let result1 = lockedWord1 || "";
    let result2 = lockedWord2 || "";
    let completedSlots = (lockedWord1 ? 1 : 0) + (lockedWord2 ? 1 : 0);

    function checkCompletion() {
        completedSlots++;
        if (completedSlots === 2) {
            // ガチャ完了処理
            isSpinning = false;
            spinBtn.disabled = false;
            spinBtn.classList.remove('spinning');

            const resultText = result1 + result2;
            const price = calculateBPBGold(result1, result2);

            // 結果の描画
            document.getElementById('result-text').textContent = resultText;
            document.getElementById('result-price').textContent = price;
            document.getElementById('result-section').classList.remove('hidden');
            updateBookmarkButtonUI(resultText);


            // 演出
            playSuccessSound();
            spawnConfetti();

            // 履歴に追加
            addToHistory(resultText, price);
            incrementTotalRolls();

            // 通常ロール回数のカウントと高速モード解放判定
            if (normalRollCount < 3) {
                normalRollCount++;
                localStorage.setItem('normal_roll_count', normalRollCount);
                
                if (normalRollCount === 3) {
                    // 3回達成！高速モードの存在をハイライト
                    const container = document.getElementById('fast-mode-container');
                    container.classList.add('highlight-glow');
                    
                    // アナウンスの通知（右上の高速モードをガイドするトースト、次に回すまで常時表示）
                    setTimeout(() => {
                        showToast("💡 右上のヘッダーに、演出をスキップして即時に結果を出す「高速モード」が追加されました！ONにすると待ち時間ゼロで回せます！", 0);
                    }, 800);
                }
            }
            resetIdleTimer();
        }
    }

    // スロット1は1.2秒後に停止、スロット2は1.9秒後に停止（時間差によるワクワク演出）
    if (!lockedWord1) {
        animateSlot('strip-1', activeGroup1, 1200, (word) => {
            result1 = word;
            checkCompletion();
        });
    }

    if (!lockedWord2) {
        animateSlot('strip-2', activeGroup2, 1900, (word) => {
            result2 = word;
            checkCompletion();
        });
    }
}

// --- 履歴ログ管理 ---
function addToHistory(word, price) {
    let history = JSON.parse(localStorage.getItem('gacha_history') || '[]');
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
    
    // 最新を先頭に追加
    history.unshift({ word, price, time: timeStr });
    
    // 最大30件保持
    if (history.length > 30) {
        history.pop();
    }
    
    localStorage.setItem('gacha_history', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('history-list');
    const history = JSON.parse(localStorage.getItem('gacha_history') || '[]');
    
    if (history.length === 0) {
        list.innerHTML = `<p class="no-history">まだ履歴がありません。ガチャを回してみましょう！</p>`;
        return;
    }

    list.innerHTML = history.map((item, idx) => {
        const bookmarked = isBookmarked(item.word);
        return `
            <div class="history-item">
                <div class="history-item-left">
                    <span class="history-word">${item.word}</span>
                    <span class="history-meta">ロール時刻: ${item.time}</span>
                </div>
                <div class="history-item-right">
                    <span class="history-price">${item.price}</span>
                    <button class="history-bookmark-btn${bookmarked ? ' active' : ''}" data-word="${item.word}" data-price="${item.price}" data-time="${item.time}" title="お気に入り" aria-label="お気に入り">
                        <svg viewBox="0 0 24 24" width="16" height="16">
                            <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function clearHistory() {
    localStorage.removeItem('gacha_history');
    renderHistory();
    showToast("履歴をクリアしました");
}

// --- トースト通知 ---
function showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.remove('hidden');
    
    if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
        toast.timeoutId = null;
    }
    
    // duration が 0 より大きい場合のみ自動で消す
    if (duration > 0) {
        toast.timeoutId = setTimeout(() => {
            toast.classList.add('hidden');
        }, duration);
    }
}

// --- テーマ（ライト/ダーク）管理 ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
    playTickSound(1000, 0.02);
}

function updateThemeUI(theme) {
    const sunIcon = document.querySelector('.icon-sun');
    const moonIcon = document.querySelector('.icon-moon');
    
    if (theme === 'dark') {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
}

// --- 音声ミュート切り替え ---
function toggleSound() {
    soundEnabled = !soundEnabled;
    const soundOnIcon = document.querySelector('.icon-sound-on');
    const soundOffIcon = document.querySelector('.icon-sound-off');
    
    if (soundEnabled) {
        soundOnIcon.classList.remove('hidden');
        soundOffIcon.classList.add('hidden');
        playTickSound(800, 0.05); // 有効テスト音
    } else {
        soundOnIcon.classList.add('hidden');
        soundOffIcon.classList.remove('hidden');
    }
}

// --- 共有 & コピーユーティリティ ---
function copyResult() {
    const resultText = document.getElementById('result-text').textContent;
    const resultPrice = document.getElementById('result-price').textContent;
    
    if (resultText === '---') return;
    
    const textToCopy = `⚔️ BPBアイテムキメラガチャ結果：【${resultText}】（ショップ販売価格: ${resultPrice}）\n#BPBキメラガチャ #バックパックバトル`;
    
    navigator.clipboard.writeText(textToCopy)
        .then(() => showToast("クリップボードにコピーしました！"))
        .catch(err => console.error("Copy failed", err));
}

function shareOnX() {
    const resultText = document.getElementById('result-text').textContent;
    const resultPrice = document.getElementById('result-price').textContent;
    
    if (resultText === '---') return;
    
    const priceNumber = resultPrice.replace(/[^0-9]/g, '');
    const pageUrl = window.location.href;
    const tweetText = `BPBアイテムキメラガチャ結果\n【${resultText}】\n価値:${priceNumber}ゴールド\n#BPBキメラガチャ\n${pageUrl}`;
    
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(shareUrl, '_blank');
}


// --- 語群確認ビューア機能 ---
function renderWordViewer() {
    const list1 = document.getElementById('viewer-list-1');
    const list2 = document.getElementById('viewer-list-2');
    const count1 = document.getElementById('count-group1');
    const count2 = document.getElementById('count-group2');

    if (!list1 || !list2) return;

    // 単語数表示
    count1.textContent = `${activeGroup1.length}語`;
    count2.textContent = `${activeGroup2.length}語`;

    // 語群1のレンダリング (固定中ならselectedクラスと鍵マークを付与)
    list1.innerHTML = activeGroup1.map(w => {
        const isSelected = lockedWord1 === w;
        return `<span class="word-chip${isSelected ? ' selected' : ''}" data-word="${w}">${isSelected ? '🔒 ' : ''}${w}</span>`;
    }).join('');
    
    // 語群2のレンダリング (固定中ならselectedクラスと鍵マークを付与)
    list2.innerHTML = activeGroup2.map(w => {
        const isSelected = lockedWord2 === w;
        return `<span class="word-chip${isSelected ? ' selected' : ''}" data-word="${w}">${isSelected ? '🔒 ' : ''}${w}</span>`;
    }).join('');
}

// --- スロット固定UI同期処理 ---
function updateSlotLockUI() {
    const indicator1 = document.getElementById('lock-indicator-1');
    const indicator2 = document.getElementById('lock-indicator-2');
    const strip1 = document.getElementById('strip-1');
    const strip2 = document.getElementById('strip-2');

    if (!indicator1 || !indicator2 || !strip1 || !strip2) return;

    if (lockedWord1) {
        indicator1.classList.remove('hidden');
        strip1.innerHTML = `<div class="slot-item">${lockedWord1}</div>`;
        strip1.style.transform = 'translateY(0)';
    } else {
        indicator1.classList.add('hidden');
    }

    if (lockedWord2) {
        indicator2.classList.remove('hidden');
        strip2.innerHTML = `<div class="slot-item">${lockedWord2}</div>`;
        strip2.style.transform = 'translateY(0)';
    } else {
        indicator2.classList.add('hidden');
    }
}

// --- ブックマーク機能 (お気に入り保存・同期・プレビュー) ---
function splitChimeraWord(chimeraWord) {
    for (const w1 of activeGroup1) {
        if (chimeraWord.startsWith(w1)) {
            const w2 = chimeraWord.substring(w1.length);
            if (activeGroup2.includes(w2)) {
                return { word1: w1, word2: w2 };
            }
        }
    }
    return { word1: "", word2: "" };
}

function isBookmarked(word) {
    return bookmarks.some(b => b.word === word);
}

function toggleBookmark(word, price, time) {
    if (!word || word === '---') return;
    
    const index = bookmarks.findIndex(b => b.word === word);
    if (index > -1) {
        bookmarks.splice(index, 1);
        showToast("ブックマークから削除しました");
    } else {
        let timeStr = time;
        if (!timeStr) {
            const now = new Date();
            timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
        }
        bookmarks.push({ word, price, time: timeStr });
        showToast("ブックマークに追加しました！");
    }
    
    localStorage.setItem('gacha_bookmarks', JSON.stringify(bookmarks));
    renderBookmarks();
    renderHistory();
    
    const currentWord = document.getElementById('result-text').textContent;
    if (currentWord === word) {
        updateBookmarkButtonUI(word);
    }
}

function renderBookmarks() {
    const list = document.getElementById('bookmarks-list');
    if (!list) return;
    
    if (bookmarks.length === 0) {
        list.innerHTML = `<p class="no-bookmarks">ブックマークされたキメラアイテムはまだありません。星マークをクリックしてブックマークしましょう！</p>`;
        return;
    }
    
    list.innerHTML = bookmarks.map(item => `
        <div class="bookmark-card" data-word="${item.word}" data-price="${item.price}">
            <div class="bookmark-card-body">
                <span class="bookmark-card-word">${item.word}</span>
                <span class="bookmark-card-price">${item.price}</span>
            </div>
            <button class="bookmark-card-delete" data-word="${item.word}" title="削除" aria-label="削除">
                <svg viewBox="0 0 24 24" width="14" height="14">
                    <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                </svg>
            </button>
        </div>
    `).join('');
}

function previewBookmark(word, price) {
    if (isSpinning) return;
    
    document.getElementById('result-text').textContent = word;
    document.getElementById('result-price').textContent = price;
    document.getElementById('result-section').classList.remove('hidden');
    
    const parts = splitChimeraWord(word);
    if (parts.word1 && parts.word2) {
        document.getElementById('strip-1').innerHTML = `<div class="slot-item">${parts.word1}</div>`;
        document.getElementById('strip-2').innerHTML = `<div class="slot-item">${parts.word2}</div>`;
        document.getElementById('strip-1').style.transform = 'translateY(0)';
        document.getElementById('strip-2').style.transform = 'translateY(0)';
    }
    
    updateBookmarkButtonUI(word);
    playTickSound(900, 0.05);
    resetIdleTimer();
    
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function updateBookmarkButtonUI(word) {
    const btn = document.getElementById('bookmark-btn');
    const text = document.getElementById('bookmark-btn-text');
    if (!btn || !text) return;
    
    if (isBookmarked(word)) {
        btn.classList.add('active');
        text.textContent = 'ブックマーク済み';
    } else {
        btn.classList.remove('active');
        text.textContent = 'ブックマークする';
    }
}

// --- 初期ロードセットアップ ---
document.addEventListener('DOMContentLoaded', () => {
    // 各種初期化
    initTheme();
    initSlotStrips();
    renderWordViewer();
    renderHistory();
    renderBookmarks(); // ブックマーク一覧のロード
    fetchGlobalSpins(); // 世界累計ガチャ回数のロード

    // イベントリスナーの登録
    document.getElementById('spin-btn').addEventListener('click', spinGacha);
    document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
    document.getElementById('sound-toggle-btn').addEventListener('click', toggleSound);
    document.getElementById('copy-btn').addEventListener('click', copyResult);
    document.getElementById('share-btn').addEventListener('click', shareOnX);
    document.getElementById('clear-history-btn').addEventListener('click', clearHistory);

    // ブックマーク登録ボタン
    document.getElementById('bookmark-btn').addEventListener('click', () => {
        if (isSpinning) return;
        const word = document.getElementById('result-text').textContent;
        const price = document.getElementById('result-price').textContent;
        if (word === '---') return;
        toggleBookmark(word, price);
        playTickSound(1000, 0.04);
        resetIdleTimer();
    });

    // すべて解除ボタン
    document.getElementById('clear-bookmarks-btn').addEventListener('click', () => {
        if (bookmarks.length === 0) return;
        if (confirm("すべてのブックマークを解除しますか？")) {
            bookmarks = [];
            localStorage.removeItem('gacha_bookmarks');
            renderBookmarks();
            renderHistory();
            const currentWord = document.getElementById('result-text').textContent;
            updateBookmarkButtonUI(currentWord);
            showToast("すべてのブックマークを解除しました");
            playTickSound(600, 0.05);
            resetIdleTimer();
        }
    });

    // ブックマーク一覧クリック（プレビュー・個別削除）
    document.getElementById('bookmarks-list').addEventListener('click', (e) => {
        if (isSpinning) return;
        
        // 削除ボタン
        const deleteBtn = e.target.closest('.bookmark-card-delete');
        if (deleteBtn) {
            e.stopPropagation();
            const word = deleteBtn.dataset.word;
            toggleBookmark(word);
            playTickSound(800, 0.04);
            resetIdleTimer();
            return;
        }
        
        // プレビュー
        const card = e.target.closest('.bookmark-card');
        if (card) {
            const word = card.dataset.word;
            const price = card.dataset.price;
            previewBookmark(word, price);
        }
    });

    // 履歴のお気に入りスタークリック（イベントデリゲーション）
    document.getElementById('history-list').addEventListener('click', (e) => {
        if (isSpinning) return;
        const bookmarkBtn = e.target.closest('.history-bookmark-btn');
        if (bookmarkBtn) {
            e.stopPropagation();
            const word = bookmarkBtn.dataset.word;
            const price = bookmarkBtn.dataset.price;
            const time = bookmarkBtn.dataset.time;
            toggleBookmark(word, price, time);
            playTickSound(1000, 0.04);
            resetIdleTimer();
        }
    });

    // 語群1の単語チップ選択（固定）の登録
    document.getElementById('viewer-list-1').addEventListener('click', (e) => {
        if (isSpinning) return;
        const chip = e.target.closest('.word-chip');
        if (!chip) return;
        const word = chip.dataset.word;
        if (lockedWord1 === word) {
            lockedWord1 = null;
        } else {
            lockedWord1 = word;
        }
        renderWordViewer();
        updateSlotLockUI();
        playTickSound(1000, 0.04);
        resetIdleTimer();
    });

    // 語群2の単語チップ選択（固定）の登録
    document.getElementById('viewer-list-2').addEventListener('click', (e) => {
        if (isSpinning) return;
        const chip = e.target.closest('.word-chip');
        if (!chip) return;
        const word = chip.dataset.word;
        if (lockedWord2 === word) {
            lockedWord2 = null;
        } else {
            lockedWord2 = word;
        }
        renderWordViewer();
        updateSlotLockUI();
        playTickSound(1000, 0.04);
        resetIdleTimer();
    });

    // 高速モードが操作されたらハイライト点滅を消去する
    document.getElementById('fast-mode-checkbox').addEventListener('change', () => {
        document.getElementById('fast-mode-container').classList.remove('highlight-glow');
    });

    // キーボードのSpaceキーでもガチャを回せるようにする（親切なアクセシビリティ設計）
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.tagName !== 'BUTTON') {
            e.preventDefault();
            spinGacha();
        }
    });

    // 5秒放置の監視（マウス移動、クリック、キー入力、スクロール、タッチでタイマーリセット）
    const activityEvents = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => {
        window.addEventListener(evt, resetIdleTimer, { passive: true });
    });
    resetIdleTimer(); // 初期ロード時にタイマー起動
});
