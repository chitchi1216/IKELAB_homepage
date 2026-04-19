# IKELAB2026 — Icon Design Concept & Guidelines

> **IKELAB2026** は自然科学系研究サークルです。  
> 本書は、サークルのアイコン（正方形・テキストのみ）に関する  
> デザインコンセプト・制作仕様・運用ルールをまとめた公式ガイドラインです。

---

## 01. デザインコンセプト — 「等量 / ISOVALUE」

自然科学の観測行為は、常に「等値」を探す営みである。等温線、等圧線、等ポテンシャル面 — いずれも変化する世界の中に「不変の構造」を見出そうとする知的態度だ。このアイコンはその哲学をタイポグラフィとして結晶化したものである。

### 構成の論理

**「2026 / IKE / LAB」** という3段構成は、単なる略称の積み重ねではない。IKELAB という名称を年号・頭文字・末尾という3つの意味層に分解し、それぞれを独立した情報として縦に積む。読む者は3行を順に読み下すことで、サークルの「いつ・誰・何」を同時に把握する。

### 書体の選択

採用書体は **Instrument Sans Bold**。スイス国際タイポグラフィ様式（Helvetica の系譜）に連なる中立書体でありながら、微かに人文主義的な温かみを持つ。この書体が「時代を超えて機能する」理由は、流行を参照していないことにある。1960年代の研究誌の表紙に置いても、2060年代のデジタルインターフェースに配置しても、同じ顔で立ち続けることができる。

### 均等の哲学

全3行を **同一の横幅（718px @ 1024px）** に揃える。このとき重要なのは「同一のフォントサイズで均等に引き伸ばす」のではなく、**各行がその幅に自然にフィットするフォントサイズを独立して設計する**ことである。

- `2026` (4字) は小さめのフォントサイズで自然幅が基準幅に一致
- `IKE`  (3字) は同一キャップ高・基準幅に両端揃え
- `LAB`  (3字) は同一キャップ高・基準幅で自然幅が一致

この設計により、各行の「文字密度（字間の粗密）」が視覚的に均一になる。見る者が意識せずとも感じる「揃い感」は、この緻密な計算から生まれる。

### 光学補正

全体ブロックを数学的中央より **14px 上** に配置している。これは「光学的中央補正」と呼ばれる古典的なタイポグラフィ技法で、人間の視覚は数学的中央を「下寄り」に感じるため、若干上にシフトすることで安定感が生まれる。

---

## 02. 制作仕様

| 項目 | 仕様 |
|:--|:--|
| 構成 | `2026` / `IKE` / `LAB`  3段・各行同一幅 |
| 書体 | **Instrument Sans Bold** |
| 基準幅 | 718px（@ master 1024px） |
| フォントサイズ | `2026` = 295pt、`IKE` = 364pt、`LAB` = 364pt |
| キャップ高 | `IKE` ≈ `LAB` ≈ 263px、`2026` ≈ 219px |
| 行間 | キャップ高の 16%（= 42px） |
| 余白 | 上下左右 74px（= 全辺7.2%） |
| 光学補正 | 全体を上に 14px シフト |
| 角丸 | 80px（標準バリエーション） |
| 配色 | Pure Black `#000000` ／ Pure White `#FFFFFF` |
| キャンバス使用率 | 約 81%（高密度かつ余白を確保） |

### カラー定義

```
BLACK   RGB(  0,   0,   0)   HEX #000000   CMYK 0  0  0  100
WHITE   RGB(255, 255, 255)   HEX #FFFFFF   CMYK 0  0  0    0
```

---

## 03. バリエーション

| バリエーション名 | 背景 | 文字 | 角丸 | 主な用途 |
|:--|:--|:--|:--|:--|
| `black_rounded` ★Primary | 黒 | 白 | 80px | SNS・App Store・Web（ライトモード） |
| `black_sharp`            | 黒 | 白 | なし | 印刷・スタンプ・名刺 |
| `white_rounded`          | 白 | 黒 | 80px | ダークモードのUI・白背景に重ねる |
| `white_sharp`            | 白 | 黒 | なし | 印刷（白地） |
| `transparent_black`      | 透明 | 黒 | 80px | Webサイトの明るい背景に重ねる |
| `transparent_white`      | 透明 | 白 | 80px | Webサイトの暗い背景に重ねる |

---

## 04. ファイル一覧と用途

### 命名規則

```
ikelab2026_icon_{バリエーション}_{サイズ}.png

バリエーション : black_rounded / black_sharp / white_rounded / white_sharp /
                transparent_black / transparent_white
サイズ         : master (1024px) / XL (512px) / L (256px) /
                M (128px) / S (64px) / XS (32px)
```

### サイズ別推奨用途

| サイズ | 解像度 | 主な用途 |
|:--|:--|:--|
| **master** | 1024 × 1024 px | App Store、Google Play、再加工用マスター |
| **XL**     |  512 × 512 px  | SNSプロフィール（Twitter/X、Instagram） |
| **L**      |  256 × 256 px  | Webサイトヘッダー、OGP画像内アイコン |
| **M**      |  128 × 128 px  | スライド内アイコン、メールシグネチャ |
| **S**      |   64 × 64 px   | タブバー、小型バナー |
| **XS**     |   32 × 32 px   | ブラウザ favicon（.ico に変換して使用） |

### favicon 実装例（HTML）

```html
<!-- ブラウザ標準 favicon -->
<link rel="icon" type="image/png" sizes="32x32"
      href="/assets/icons/ikelab2026_icon_black_rounded_XS.png">

<!-- 高解像度（Retina対応） -->
<link rel="icon" type="image/png" sizes="64x64"
      href="/assets/icons/ikelab2026_icon_black_rounded_S.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180"
      href="/assets/icons/ikelab2026_icon_black_rounded_L.png">

<!-- ダークモード対応 -->
<link rel="icon" media="(prefers-color-scheme: dark)"
      href="/assets/icons/ikelab2026_icon_white_rounded_XS.png">
```

---

## 05. ワードマークとの関係

本アイコンは、横型ワードマーク「**IKELAB2026**」（Instrument Sans Bold）と同一の書体・同一の配色体系に属する **アイコン（正方形）** です。

| 場面 | 使用アセット |
|:--|:--|
| Webサイト ページ最上部 | ワードマーク横型（`IKELAB2026`） |
| Webサイト ヘッダー左上 | アイコン L（256px）+ ワードマーク横型 |
| SNS プロフィール画像 | アイコン XL（512px）— `black_rounded` |
| ブラウザ favicon | アイコン XS（32px）|
| スライド タイトル | ワードマーク横型 |
| スライド フッター | アイコン M（128px） |
| 印刷物（白地） | `black_rounded` または `black_sharp` |
| 印刷物（濃色地） | `white_rounded` または `white_sharp` |

---

## 06. クリアスペース と 最小サイズ

### クリアスペース

アイコン周囲に **アイコン辺長の 1/8 以上** の保護領域を確保してください。

```
アイコン = 256px のとき  →  クリアスペース = 32px（各辺）
アイコン = 128px のとき  →  クリアスペース = 16px（各辺）
```

`black_rounded` / `white_rounded` のような背景付きバリエーションは、  
角丸内のパディングがクリアスペースを兼ねるため追加不要です。

### 最小サイズ

| 媒体 | 最小サイズ |
|:--|:--|
| Webディスプレイ | **32 × 32 px**（= XS ファイルそのまま） |
| 印刷物 | **12 × 12 mm** |

---

## 07. 運用ルール — Do / Don't

### ✅ Do（推奨される使用）

- 明るい背景には `black_rounded` または `transparent_black` を使う
- 暗い背景には `white_rounded` または `transparent_white` を使う
- 展開サイズに最も近い配布ファイルを選ぶ（引き伸ばし・縮小を最小化）
- favicon には XS（32px）を `.ico` に変換して使う
- Apple Touch Icon には master（1024px）または L（256px）を使う
- 印刷入稿には master（1024px）または XL（512px）を使う

### ❌ Don't（禁止される使用）

- アイコンを **回転・傾斜・変形・部分トリミング** すること
- **影・グロー・グラデーション・アウトライン・エフェクト** を追加すること
- 指定外の色（グレー・カラー等）で着色すること
- `2026` / `IKE` / `LAB` の文字を個別に編集・抜き出すこと
- コントラスト比が **WCAG AA（4.5:1）** を下回る背景に配置すること
- 最小サイズを下回って使用すること
- 解像度の低いファイルを引き伸ばして使用すること

---

## 08. 補助書体（ロゴ外の文字組み）

本アイコンと組み合わせる書体は以下を推奨します。

| 用途 | 書体 | 入手先 |
|:--|:--|:--|
| 欧文 見出し・本文 | Instrument Sans（Regular / Medium / Bold） | Google Fonts |
| 和文 見出し・本文 | Noto Sans JP（Regular / Medium / Bold） | Google Fonts |

```css
/* Google Fonts CDN — Web使用時 */
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap');
```

---

## 09. 設計パラメータ（再制作・改訂時の参照用）

```python
# 1024 × 1024px マスターの設計値
SZ           = 1024   # キャンバスサイズ
PAD          = 74     # 上下左右余白 px
CONTENT_H    = 876    # 有効コンテンツ高
TARGET_CAP   = 263    # 各行の目標キャップ高 px
FONT_2026    = 295    # 「2026」フォントサイズ pt
FONT_IKE     = 364    # 「IKE」フォントサイズ pt
FONT_LAB     = 364    # 「LAB」フォントサイズ pt
REF_WIDTH    = 718    # 全行を揃える基準幅 px
GAP          = 42     # 行間 px（= TARGET_CAP × 0.16）
OPTICAL_LIFT = 14     # 光学的中央補正 px（上方シフト）
RADIUS       = 80     # 角丸半径 px
FONT         = "InstrumentSans-Bold.ttf"
```

---

## 10. 更新履歴

| Version | Date | Notes |
|:--|:--|:--|
| 1.0.0 | 2026-04-18 | 初版リリース — F1案決定 / 全6バリエーション × 6サイズ = 36ファイル |

---

*このアイコンは、自然科学の探求が持つ「等しい眼差し」を形にしたものである。  
2026 と IKE と LAB が同一の幅に並ぶとき、年号も頭文字も末尾も、等しく重要だと宣言している。*
