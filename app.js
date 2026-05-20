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

    const fastModeActive = document.getElementById('fast-mode-checkbox')?.checked || false;

    if (fastModeActive) {
        // --- 高速モード（即座に結果を出力） ---
        const result1 = activeGroup1[Math.floor(Math.random() * activeGroup1.length)];
        const result2 = activeGroup2[Math.floor(Math.random() * activeGroup2.length)];
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

        // 効果音と紙吹雪
        playSuccessSound();
        spawnConfetti();

        // 履歴追加
        addToHistory(resultText, price);
        return;
    }

    // --- 通常演出モード ---
    isSpinning = true;

    // UI状態の更新
    const spinBtn = document.getElementById('spin-btn');
    spinBtn.disabled = true;
    spinBtn.classList.add('spinning');
    document.getElementById('result-section').classList.add('hidden');
    
    let result1 = "";
    let result2 = "";
    let completedSlots = 0;

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

            // 演出
            playSuccessSound();
            spawnConfetti();

            // 履歴に追加
            addToHistory(resultText, price);

            // 通常ロール回数のカウントと高速モード解放判定
            if (normalRollCount < 3) {
                normalRollCount++;
                localStorage.setItem('normal_roll_count', normalRollCount);
                
                if (normalRollCount === 3) {
                    // 3回達成！高速モードをアンロック
                    const container = document.getElementById('fast-mode-container');
                    container.classList.remove('hidden');
                    container.style.animation = 'pop 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    
                    // アナウンスの通知（特別なビジュアルトースト）
                    setTimeout(() => {
                        showToast("🎉 3回プレイ達成！演出スキップ「高速モード」が解放されました！", 6000);
                    }, 800);
                }
            }
        }
    }

    // スロット1は1.2秒後に停止、スロット2は1.9秒後に停止（時間差によるワクワク演出）
    animateSlot('strip-1', activeGroup1, 1200, (word) => {
        result1 = word;
        checkCompletion();
    });

    animateSlot('strip-2', activeGroup2, 1900, (word) => {
        result2 = word;
        checkCompletion();
    });
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

    list.innerHTML = history.map((item, idx) => `
        <div class="history-item">
            <div class="history-item-left">
                <span class="history-word">${item.word}</span>
                <span class="history-meta">ロール時刻: ${item.time}</span>
            </div>
            <div class="history-item-right">
                <span class="history-price">${item.price}</span>
            </div>
        </div>
    `).join('');
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
    
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    
    // フェードアウト
    toast.timeoutId = setTimeout(() => {
        toast.classList.add('hidden');
    }, duration);
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
    
    const text = encodeURIComponent(`⚔️ BPBアイテムキメラガチャ結果：【${resultText}】（ショップ販売価格: ${resultPrice}）\n`);
    const hashtags = encodeURIComponent("BPBキメラガチャ,バックパックバトル");
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}`;
    
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

    // 語群1のレンダリング
    list1.innerHTML = activeGroup1.map(w => `<span class="word-chip">${w}</span>`).join('');
    
    // 語群2のレンダリング
    list2.innerHTML = activeGroup2.map(w => `<span class="word-chip">${w}</span>`).join('');
}

// --- 初期ロードセットアップ ---
document.addEventListener('DOMContentLoaded', () => {
    // 各種初期化
    initTheme();
    initSlotStrips();
    renderWordViewer();
    renderHistory();

    // 既に3回以上プレイしていれば高速モードを初期状態で表示
    if (normalRollCount >= 3) {
        document.getElementById('fast-mode-container').classList.remove('hidden');
    }

    // イベントリスナーの登録
    document.getElementById('spin-btn').addEventListener('click', spinGacha);
    document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);
    document.getElementById('sound-toggle-btn').addEventListener('click', toggleSound);
    document.getElementById('copy-btn').addEventListener('click', copyResult);
    document.getElementById('share-btn').addEventListener('click', shareOnX);
    document.getElementById('clear-history-btn').addEventListener('click', clearHistory);

    // キーボードのSpaceキーでもガチャを回せるようにする（親切なアクセシビリティ設計）
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && document.activeElement.tagName !== 'TEXTAREA' && document.activeElement.tagName !== 'BUTTON') {
            e.preventDefault();
            spinGacha();
        }
    });
});
