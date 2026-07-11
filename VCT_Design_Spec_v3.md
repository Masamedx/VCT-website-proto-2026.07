# Virtual Clinical Training — サイト設計仕様書 v3

## グローバルベンチマーク分析 + IG投稿内容を反映した最終版
作成日: 2026年7月5日
参考事例: RipeGlobal, DSD Online, Dawson Academy, Spear Education, Dentaljuce

---

## 1. 全体設計方針

### 1.1 デザインコンセプト
- スタイル: Modern Professional
- キーワード: 動的、洗練、信頼、権威性、プロフェッショナル
- ストック写真不使用 — タイポグラフィ主体のヒーロー
- 全ページ英語のみ

### 1.2 基本情報（IG投稿より確認済み）
- アカデミー名: V.C.T. / Virtual Clinical Training
- IGアカウント: @vct.my
- 連絡先電話: +6016 5094565
- メール: virtualclinicaltraining@gmail.com
- WhatsApp: +6016 5094565
- 拠点: Kuala Lumpur, Malaysia

### 1.3 カラーパレット

| 用途 | 色名 | HEX |
|---|---|---|
| ヒーロー・CTA・フッター背景 | Navy 950 | #060E1B |
| プライマリーダーク | Navy 900 | #0B1A2E |
| セカンダリーダーク | Navy 800 | #122846 |
| CTAボタン・アクセント | Blue 600 | #1D6FEB |
| アクセントライト | Blue 400 | #60A5FA |
| アクセント背景 | Blue 50 | #EFF6FF |
| テキスト（見出し） | Gray 900 | #111827 |
| テキスト（本文） | Gray 800 | #1F2937 |
| テキスト（補助） | Gray 500 | #6B7280 |
| テキスト（ラベル） | Gray 400 | #9CA3AF |
| 背景（白） | White | #FFFFFF |
| 背景（グレー） | Gray 50 | #F9FAFB |
| ボーダー | Gray 200 | #E5E7EB |
| 成功・チェック | Green 600 | #059669 |

### 1.4 タイポグラフィ

| 用途 | フォント | ウェイト |
|---|---|---|
| 見出し・ナビ・CTA | Inter | 600-700 |
| 本文 | Inter | 400-500 |
| アクセント引用（限定） | Instrument Serif | 400 italic |

### 1.5 アニメーション仕様

すべて transform と opacity のみ使用。prefers-reduced-motion を尊重。

| 要素 | アニメーション | 仕様 |
|---|---|---|
| ヒーロー読み込み | フェードインシーケンス | eyebrow → headline → subtitle → CTA が 0.2秒間隔で translateY(20px→0) + opacity 0→1 |
| スクロール連動 | フェードイン | 各セクション: opacity 0→1 + translateY(30px→0), 0.6s ease-out |
| ヘッダー変化 | 背景変化 | スクロール50px超で透過→白背景+backdrop-filter:blur(12px) |
| カードホバー | リフト | translateY(-2px) + box-shadow増加, 0.2s |
| CTAボタン | ホバー | 背景色シフト, active時 scale(0.98) |
| ヒーロー背景 | パララックス | 幾何学的円形要素がスクロール速度の0.3倍で微動 |
| 信頼シグナルバー | カウントアップ | 数字が0から目標値まで |
| How it works | 順次フェードイン | 3カードが左→右へ0.15秒ずつ遅延 |

### 1.6 レスポンシブ

| ブレークポイント | 幅 | 変更内容 |
|---|---|---|
| Desktop | 1120px+ | フルレイアウト |
| Tablet | 768-1119px | 2カラム→1カラム |
| Mobile | <768px | ハンバーガーメニュー、サイドバー→下部、固定CTAバー |

---

## 2. トップページ — /

### Header（固定 / 64px）
- 要素: ロゴ（VCTマーク+フルネーム）→ ナビ（Home, Courses, Instructors, About）→ IGアイコン → WhatsAppアイコン → CTA「Explore courses」
- ヒーロー上: 白文字＋透過背景 → スクロールでガラスモーフィズム
- モバイル: ハンバーガーメニュー

### 01 — ヒーロー（100vh / ダークネイビー）
- Eyebrow: ONLINE DENTAL EDUCATION — KUALA LUMPUR, MALAYSIA
- ヘッドライン: Expert-led clinical training. From your screen to your chair.
- サブテキスト: Virtual Clinical Training delivers live, interactive sessions with international dental specialists via Google Meet — with recordings included so you never miss a thing.
- タグライン: Affordable. Accessible. Practical.（Blue 400）
- CTA: Primary「View upcoming courses」+ Ghost「How it works ↓」
- 背景: ダークネイビーグラデーション + 微細な幾何学要素
- GEO: 最初の文で「Virtual Clinical Training delivers...」と主語明示

### 02 — 信頼シグナルバー
- 4つの数字/キーワード + 短い説明ラベル:
  - RM 30〜 / per session
  - 2 hrs / focused learning
  - 100% / virtual · Google Meet
  - RCSEd / credentialed instructors
- アニメーション: カウントアップ

### 03 — 注目コース
- ラベル: NEXT SESSION
- ダークヘッダーバー: 日時 +「Open for registration」バッジ
- コースタイトル
- 引用スタイル一行コピー（問いかけ形式）
- 講師情報（アバター + 名前 + 資格）
- 学習目標4項目（チェックマーク）
- CTA「Register — RM 30 early bird」+「View full details →」+ 通常価格

### 04 — How it works（グレー背景）
- 見出し: 3 steps to sharpen your skills
- 3ステップ: Choose a session → Join live on Google Meet → Apply and revisit

### 05 — Why VCT（白背景）
- 見出し: Quality dental education, without the barriers
- 4カード: Accessible pricing / International expertise / Learn from anywhere / Clinically practical

### 06 — 講師スポットライト（グレー背景）
- 見出し: Learn from those who practice what they teach
- 横型カード: 写真 + 情報 + 専門タグ +「View all instructors →」
- 下部: More instructors joining soon

### 07 — CTA（ダーク背景）
- ヘッドライン: Ready to elevate your practice?
- コース情報直接表示（タイトル・日付・価格）
- CTA: Primary「Register now」+ Ghost「Ask us anything」（WhatsApp）

### Footer（ダーク背景）
- 4カラム: Brand / Pages / Connect / Legal
- Brand: ロゴ + Online dental education, Kuala Lumpur, Malaysia
- Connect: Instagram(@vct.my), WhatsApp(+6016 5094565), Email
- Legal: Privacy policy, Terms of service

---

## 3. コース一覧ページ — /courses/

### ページヒーロー（グレー背景）
- Eyebrow: COURSES
- タイトル: Upcoming sessions
- サブテキスト: Live, interactive clinical training via Google Meet. Every session includes a recording for all registered participants.

### コースカード（繰り返し要素）
- ダークヘッダーバー: 日付+曜日 + ステータスバッジ
- コースタイトル
- 講師（アバター + 名前 + 専門タグ）
- メタ情報: 時間、形式、価格
- CTA「View details & register →」
- カード全体クリッカブル

### Coming soon プレースホルダー
- 破線ボーダーカード
- 「More sessions in planning」
- IG・WhatsAppへの導線（通知登録のCTA化）

### FAQ（アコーディオン）
- How do I join a session?
- Will I receive a recording?
- Why is a Google account required?
- What payment methods are accepted?
- Can I get a refund if I can't attend?
- Schema.org FAQPage マークアップ適用

---

## 4. コース詳細ページ — /courses/[course-slug]/

IGからの直接リンク先（LP）。全9セクション構成。
将来の複数日コースにも対応する拡張構造。

### セクション1 — ページヒーロー（ダークネイビー）
- バッジ: 「Registration open」（緑）+「Virtual · Google Meet」（青）
- Eyebrow: VIRTUAL CLINICAL TRAINING
- タイトル: コース名
- サブテキスト: IG投稿のリード文を使用（問いかけ形式で読者の課題意識に訴える）
  - 現コース例: "Why do some periodontal cases respond beautifully to treatment, while others continue to struggle despite repeated therapy? This session explores the science and clinical realities behind successful subgingival debridement."
- メタ情報: 日付、時間(MYT)、価格

### セクション2 — コース概要 + 料金サイドバー（2カラム）

#### メインカラム

**ABOUT THIS SESSION**
- コースの詳細説明（IG投稿の説明文を反映）
- 現コース例: "Subgingival debridement remains the cornerstone of non-surgical periodontal therapy and is frequently performed in general dental practice. However, clinical outcomes may not always be as expected. This lecture explores subgingival debridement beyond the concept of 'deep scaling,' focusing on challenges clinicians face on a daily basis."

**LEARNING OBJECTIVES**（チェックマーク付きリスト）
- 現コース:
  - Common mistakes that compromise treatment outcomes
  - Step-by-step clinical approaches for effective debridement
  - Re-evaluation strategies and realistic treatment expectations
  - Practical tips to improve long-term periodontal stability

**WHO IS THIS FOR**
- 現コース: "Whether you're a student, new graduate, or experienced clinician, this session will provide practical insights you can apply in daily practice."

#### サイドバー（position: sticky）
- 料金カード:
  - Early bird価格（強調）+ 期限
  - 通常価格
  - 「Register now」ボタン（→ Google Form）
  - 注記「→ Google Form」
- モバイル: 下部固定バー（価格 + Register nowボタン）

### セクション3 — スケジュール / タイムテーブル

**単一セッションコースの場合:**
- 日付表示 + テーブル形式のタイムテーブル
- タイムテーブルの各行: 時間 | 内容
- ※現在のコースのタイムテーブルは【検討中】— 後から追記できるプレースホルダーを配置

**複数日コースの場合（将来対応）:**
- Day 1 / Day 2 のタブ切り替え
- 各日のタイムテーブルを個別表示
- 各日のテーマ/概要も含む

### セクション4 — 講師紹介（詳細版）

**YOUR INSTRUCTOR**
- 横型カード: 写真（左）+ 情報（右）
- 名前: Dr. Yeong Shue Kang
- 資格: BDS (VMU) · MFDS RCSEd · MOSc (Mal) · DrPerio (Mal)
- 経歴: "Dr. Yeong is committed to delivering high-quality, evidence-based periodontal and implant care. He obtained the Membership of the Faculty of Dental Surgery from the Royal College of Surgeons of Edinburgh (MFDS RCSEd), and pursued a Master of Oral Science and Clinical Doctorate in Periodontology at Universiti Malaya. He was awarded the 2026 Book Prize by the Malaysian Society of Periodontology (MSP)."
- /instructors/ へのリンク含む
- 注意: 実際の写真は必須

### セクション5 — What's included（2x2カードグリッド）

| アイコン | タイトル | 説明 |
|---|---|---|
| video | Live session | 2-hour interactive lecture with live Q&A |
| player-play | Recording | Full recording provided after the session |
| message-circle | Direct Q&A | Ask questions directly to the instructor |
| file-invoice | Receipt and invoice | Digital receipt issued after payment |

※将来のコースで追加可能な項目: Certificate of completion, CPD credits, Course materials など

### セクション6 — セッション詳細（テーブル形式）

| 項目 | 内容 |
|---|---|
| Date | Wednesday, 30 July 2026 |
| Time | 8:30 PM – 10:30 PM (MYT, GMT+8) |
| Platform | Google Meet (link sent after registration) |
| Recording | Provided after the session to all participants |
| Language | English |
| Requirements | Google account (for Meet access and recording) |

### セクション7 — Terms and conditions

参加者向けT&C。以下はテンプレート。【】内は検討中の項目。

- A valid Google account is required to register, join the session, and access the recording.
- The Google Meet link will be shared after payment confirmation.
- Recording will be shared via Google Drive within 【検討中 — X日以内】.
- Recording is for personal use only and may not be redistributed.
- 【検討中 — 返金ポリシー: 全額返金 / 部分返金 / 返金不可 / 条件付き】
- VCT reserves the right to reschedule; participants will be notified in advance.

※返金ポリシーが確定次第、ここに追記。
※録画アクセス期間が確定次第、ここに追記。

### セクション8 — FAQ（コース固有 / アコーディオン）

- Is this session suitable for specialists?
- What happens if I miss the live session?
- How long will I have access to the recording?
- How do I pay?
- Schema.org FAQPage マークアップ適用

### セクション9 — 最下部CTA（ダーク背景）

- ヘッドライン: Secure your spot
- 価格表示: Early bird pricing: RM 30 (before 6 July 2026)
- 連絡先: +6016 5094565 · virtualclinicaltraining@gmail.com
- CTA: Primary「Register now」+ Ghost「Ask us anything」（WhatsApp）

---

## 5. 講師紹介ページ — /instructors/

### ページヒーロー（グレー背景）
- Eyebrow: INSTRUCTORS
- タイトル: Learn from those who practice what they teach
- サブテキスト: Virtual Clinical Training collaborates with dental specialists worldwide. Each instructor is selected for clinical expertise, teaching ability, and commitment to practical education.

### 講師カード（繰り返し要素）
- 横型カード: 写真（左120px）+ 情報（右）
- 名前、資格フル表示、専門分野タグ、経歴、担当コースリンク
- 将来: 個別ページ /instructors/[instructor-slug]/ に拡張可能

### 現在の講師データ

**Dr. Yeong Shue Kang**
- 資格: BDS (VMU), MFDS RCSEd, MOSc (Mal), DrPerio (Mal)
- 専門タグ: Periodontics, Non-surgical therapy
- 経歴: Dr. Yeong is committed to delivering high-quality, evidence-based periodontal and implant care. After completing a Bachelor of Dental Surgery (BDS) in India, Dr. Yeong further advanced his professional training by obtaining the postgraduate diploma on the Membership of the Faculty of Dental Surgery from the Royal College of Surgeons of Edinburgh (MFDS RCSEd), an esteemed international qualification that reflects clinical competence and professionalism. To deepen his expertise, Dr. Yeong pursued a Master of Oral Science, followed by a Clinical Doctorate in Periodontology at Universiti Malaya — a comprehensive specialist programme integrating periodontal diagnostics, implant dentistry, contemporary treatment modalities, and advanced surgical training. During this program, he earned a distinction for his doctoral thesis and was awarded the 2026 Book Prize by the Malaysian Society of Periodontology (MSP) in recognition of his academic excellence.

### 講師募集セクション（ページ下部）
- 破線ボーダーカード
- "Are you a dental specialist? We are always looking for passionate clinical educators to join our instructor network."
- CTA: 「Get in touch」（WhatsApp）

---

## 6. SEO/GEO技術仕様

### 6.1 Schema.org マークアップ（JSON-LD）
- 全ページ共通: Organization（VCT情報）
- トップページ: WebSite + EducationalOrganization
- コース詳細: Course + Event
- 講師ページ: Person（各講師ごと）
- FAQセクション: FAQPage

### 6.2 メタタグ
- title: 各ページ固有
- description: 160文字以内
- Open Graph: og:title, og:description, og:image（IG共有時のプレビュー最適化）
- canonical URL

### 6.3 GEO（AI引用最適化）
- 各ページの最初の200語で、そのページが答える質問に直接回答
- 検証可能なエンティティ: Royal College of Surgeons of Edinburgh, Universiti Malaya, Malaysian Society of Periodontology, Google Meet
- 構造化ヘッディング（H1→H2→H3）
- FAQ を質問形式で記述

### 6.4 パフォーマンス
- Core Web Vitals: LCP<2.5s, FID<100ms, CLS<0.1
- 画像: WebP, lazy loading
- CSS: Critical CSS インライン
- フォント: font-display: swap

---

## 7. ユーザー導線

### メイン導線
IG投稿 → コース詳細ページ → Google Form申込

### 補助導線
IGプロフィール → トップページ → コース一覧 → コース詳細 → Google Form

### 問い合わせ導線
任意のページ → WhatsApp（+6016 5094565）

---

## 8. 実装メモ（Claude Code向け）

### ファイル構成
- index.html（トップページ）
- courses.html（コース一覧）
- course-subgingival-debridement.html（コース詳細）
- instructors.html（講師紹介）
- style.css（共通スタイル）

### リンク設定
- WhatsApp: https://wa.me/60165094565
- Instagram: https://www.instagram.com/vct.my/
- Email: virtualclinicaltraining@gmail.com
- Google Form: 【後で差し替え】

### 画像
- 講師写真: 実際の写真を使用（プレースホルダーはイニシャル表示で仮置き）
- IG投稿画像2のDr. Yeongの写真を使用可能

### 検討中項目（プレースホルダー配置）
- 返金ポリシー → T&Cセクション内に【検討中】と表示
- 録画アクセス期間 → T&CセクションとFAQ回答内に【検討中】と表示
- タイムテーブル → セクション3に「Timetable will be announced」のプレースホルダー
- Aboutページ → Phase 2で追加

### WordPress移行時の注意
- 各HTMLファイルのHeader/Footerは、SWELLの共通パーツに変換
- コース詳細ページのテンプレートは、WordPress カスタム投稿タイプ「Course」として設計
- 講師ページも将来的にカスタム投稿タイプ「Instructor」に変換可能
- URL構造: /courses/[slug]/ と /instructors/[slug]/ をパーマリンク設定で実現
