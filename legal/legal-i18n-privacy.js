window.LEGAL_I18N = window.LEGAL_I18N || {};
window.LEGAL_I18N.privacy = {
  en: {
    title: "Privacy Policy — Industry AI News",
    updatedLabel: "Last updated: June 2, 2026",
    footer: "© 2026 Aivelo. All rights reserved.",
    siblingLink: { label: "Payment Terms", href: "payment-terms.html" },
    sections: [
      {
        h: "Introduction",
        p: [
          'This Privacy Policy describes how Aivelo ("we," "us," or "our") collects, uses, and protects information when you use the <strong>Industry AI News</strong> Chrome extension and related services operated at <a href="https://aivelo.net" target="_blank" rel="noopener">aivelo.net</a>. By installing or using the extension, you agree to the practices described here.',
          "Industry AI News aggregates industry news from whitelisted RSS feeds, generates AI summaries, and optionally syncs preferences and subscriptions across devices. We design the product to collect only what is needed to provide these features."
        ]
      },
      {
        h: "Information We Collect",
        p: ["We may collect the following categories of information:"],
        ul: [
          "<strong>Account information</strong> — If you sign in with Google or email one-time password (OTP) via Supabase Auth, we receive your account identifier and email address associated with your login.",
          "<strong>Preferences and settings</strong> — Topics you follow, reminder settings, UI theme, language, and related options stored locally in <code>chrome.storage.sync</code> and <code>chrome.storage.local</code>, and synced to our servers for paid plans.",
          "<strong>Usage and interaction data</strong> — Anonymous user ID and device fingerprint used for analytics, including preference snapshots (track-prefs) and article actions such as like, dislike, and read (track-article-action).",
          "<strong>News content metadata</strong> — Article URLs, titles, and publication dates from RSS feeds you consume; this data is sent to our servers to generate AI summaries and deliver news.",
          "<strong>Subscription status</strong> — Your plan tier (Free, Pro, or Unlimited), linked to your account email after purchase through Gumroad.",
          "<strong>Email digest data</strong> — For Unlimited subscribers and eligible trial users, your email address and digest preferences to send scheduled AI news summaries."
        ]
      },
      {
        h: "How We Use Your Information",
        p: [
          "We use collected information to deliver RSS news aggregation in the side panel, generate AI summaries, send browser notifications and reminders, sync preferences across devices for Pro and Unlimited users, process subscriptions, send optional email digests, improve product reliability, and respond to support requests.",
          "We do <strong>not</strong> use your data to train third-party AI models for unrelated purposes, and we do not sell your personal information."
        ]
      },
      {
        h: "AI Summaries",
        p: [
          "AI summaries are generated server-side through Supabase Edge Functions using DeepSeek. When you request or receive a summary, article URLs and titles (not passwords, payment details, or other secrets) are transmitted to our backend for processing. Summaries are cached to reduce duplicate requests.",
          "AI output may be imperfect; it is provided for informational convenience and should not be relied on as professional advice."
        ]
      },
      {
        h: "Authentication",
        p: [
          "Sign-in is optional for basic use but required for cross-device sync, paid plans, and the email digest trial. Google Sign-In and email OTP are handled by Supabase Auth. We receive the authentication tokens and profile fields necessary to identify your account.",
          "Your login email is also used to match Gumroad purchases to your extension account."
        ]
      },
      {
        h: "Local Storage and Sync",
        p: [
          "The extension stores preferences locally using Chrome extension storage APIs. For Pro and Unlimited subscribers, preferences are also stored in Supabase (<code>user_extension_preferences</code>) to enable cross-device sync. Conflict resolution uses last-write-wins based on timestamps.",
          "You can clear local data by uninstalling the extension or clearing extension data in Chrome settings; cloud data may remain until you request deletion."
        ]
      },
      {
        h: "Notifications and Background Activity",
        p: [
          "When the side panel is closed, the extension uses Chrome alarms and notifications to alert you about new articles according to your reminder settings. When the side panel is open, it polls for updates instead of relying solely on background alarms.",
          "Notification content includes article titles and summary snippets. You can disable notifications or adjust reminder modes in extension settings."
        ]
      },
      {
        h: "Subscriptions and Payments",
        p: [
          "Paid plans (Pro at $9.90/month and Unlimited at $39.90/month) are sold through Gumroad, which acts as Merchant of Record. Payment card numbers and billing details are collected and processed by Gumroad, not stored by the extension or Aivelo servers.",
          "We receive subscription status, plan type, buyer email, and related webhook data from Gumroad to activate features in your account. See our <a href=\"payment-terms.html\">Payment Terms</a> for billing details."
        ]
      },
      {
        h: "Email AI Digest",
        p: [
          "Unlimited subscribers receive a daily AI news digest email at 22:00 in their local timezone, delivered via Resend. Logged-in users who are not on Unlimited may receive a one-time trial digest.",
          "Each digest email includes an unsubscribe link. Opting out stops future digest emails but does not cancel your Gumroad subscription."
        ]
      },
      {
        h: "Third-Party Services",
        p: ["We rely on the following service providers:"],
        ul: [
          "<strong>Supabase</strong> — authentication, database, edge functions, and preference sync",
          "<strong>DeepSeek</strong> — server-side AI summary generation",
          "<strong>Resend</strong> — transactional and digest email delivery",
          "<strong>Gumroad</strong> — subscription checkout, billing, and customer management",
          "<strong>RSS publishers</strong> — original news sources linked from whitelisted feeds"
        ]
      },
      {
        h: "Data Retention",
        p: [
          "We retain account, preference, analytics, and subscription data for as long as your account is active or as needed to provide the service, comply with legal obligations, resolve disputes, and enforce agreements.",
          "Aggregated or de-identified analytics may be retained longer. You may request deletion of personal data subject to applicable law and legitimate retention needs."
        ]
      },
      {
        h: "Your Rights and Choices",
        p: [
          "Depending on your jurisdiction, you may have rights to access, correct, delete, restrict, or export your personal data, and to object to certain processing.",
          "Contact us at <a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a> to exercise these rights. We will respond within a reasonable timeframe as required by applicable law."
        ]
      },
      {
        h: "Children's Privacy",
        p: [
          "Industry AI News is not directed to children under 13 (or under 16 where applicable under local law). We do not knowingly collect personal information from children. If you believe a child has provided us data, contact us and we will delete it promptly."
        ]
      },
      {
        h: "International Users",
        p: [
          "Aivelo operates from jurisdictions that may differ from yours. By using the extension, you understand that your information may be processed in countries where our service providers operate, with appropriate safeguards where required by law."
        ]
      },
      {
        h: "Changes to This Policy",
        p: [
          "We may update this Privacy Policy from time to time. The \"Last updated\" date at the top will reflect the latest revision. Material changes may be communicated through the extension or by email where appropriate. Continued use after changes constitutes acceptance of the updated policy."
        ]
      },
      {
        h: "Chrome Extension Permissions",
        p: ["Industry AI News requests the following Chrome permissions:"],
        ul: [
          "<strong>storage</strong> — save preferences, anonymous ID, and cached state",
          "<strong>alarms</strong> — schedule background news checks and reminders",
          "<strong>notifications</strong> — display new-article alerts",
          "<strong>identity</strong> — Google Sign-In through Chrome identity API",
          "<strong>host permissions</strong> — fetch RSS feeds and communicate with Aivelo/Supabase backend services"
        ]
      },
      {
        h: "Contact Us",
        p: [
          "For privacy questions or requests, email <a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>.",
          "Aivelo — <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>"
        ]
      }
    ]
  },
  zh: {
    title: "隐私政策 — Industry AI News",
    updatedLabel: "最后更新：2026年6月2日",
    footer: "© 2026 Aivelo. 保留所有权利。",
    siblingLink: { label: "付款条款", href: "payment-terms.html" },
    sections: [
      {
        h: "引言",
        p: [
          "本隐私政策说明 Aivelo（「我们」）在您使用 <strong>Industry AI News</strong> Chrome 扩展及 <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a> 相关服务时，如何收集、使用和保护您的信息。安装或使用本扩展即表示您同意本政策所述做法。",
          "Industry AI News 从白名单 RSS 源聚合行业资讯，生成 AI 摘要，并可在设备间同步偏好与订阅。我们仅收集实现上述功能所必需的数据。"
        ]
      },
      {
        h: "我们收集的信息",
        p: ["我们可能收集以下类别的信息："],
        ul: [
          "<strong>账户信息</strong> — 若您通过 Google 或 Supabase Auth 邮箱一次性验证码（OTP）登录，我们会收到与登录关联的账户标识和电子邮箱。",
          "<strong>偏好与设置</strong> — 您关注的主题、提醒设置、界面主题、语言等，保存在 <code>chrome.storage.sync</code> 与 <code>chrome.storage.local</code>；付费用户还会同步至我们的服务器。",
          "<strong>使用与交互数据</strong> — 用于分析的匿名用户 ID 与设备指纹，包括偏好快照（track-prefs）以及对文章的点赞、点踩、已读等操作（track-article-action）。",
          "<strong>资讯元数据</strong> — 来自 RSS 的文章链接、标题与发布日期；为生成 AI 摘要与推送资讯而发送至我们的服务器。",
          "<strong>订阅状态</strong> — 您的档位（Free、Pro 或 Unlimited），通过 Gumroad 购买后与账户邮箱关联。",
          "<strong>邮件摘要数据</strong> — 针对 Unlimited 订阅用户及符合条件的试用用户，您的邮箱与摘要偏好，用于发送定时 AI 资讯邮件。"
        ]
      },
      {
        h: "信息的使用方式",
        p: [
          "我们使用所收集的信息在侧栏中提供 RSS 资讯聚合、生成 AI 摘要、发送浏览器通知与提醒、为 Pro 与 Unlimited 用户跨设备同步偏好、处理订阅、发送可选邮件摘要、提升产品稳定性并响应支持请求。",
          "我们<strong>不会</strong>将您的数据用于训练无关的第三方 AI 模型，也<strong>不会</strong>出售您的个人信息。"
        ]
      },
      {
        h: "AI 摘要",
        p: [
          "AI 摘要通过 Supabase Edge Functions 在服务端使用 DeepSeek 生成。当您请求或接收摘要时，文章链接与标题（不含密码、支付信息或其他敏感凭证）会传送至我们的后端处理。摘要会缓存以减少重复请求。",
          "AI 输出可能存在偏差，仅供信息参考，不应作为专业建议依据。"
        ]
      },
      {
        h: "身份验证",
        p: [
          "基础功能无需登录；跨设备同步、付费档位及邮件摘要试用需登录。Google 登录与邮箱 OTP 由 Supabase Auth 处理。我们仅接收识别账户所需的认证令牌与资料字段。",
          "您的登录邮箱亦用于将 Gumroad 购买记录与扩展账户匹配。"
        ]
      },
      {
        h: "本地存储与同步",
        p: [
          "扩展通过 Chrome 存储 API 在本地保存偏好。Pro 与 Unlimited 用户的偏好另存于 Supabase（<code>user_extension_preferences</code>）以实现跨设备同步，冲突按时间戳采用后写入优先策略。",
          "卸载扩展或在 Chrome 设置中清除扩展数据可删除本地数据；云端数据在您请求删除前可能仍保留。"
        ]
      },
      {
        h: "通知与后台活动",
        p: [
          "侧栏关闭时，扩展使用 Chrome 闹钟与通知，按您的提醒设置推送新文章。侧栏打开时则通过轮询更新，而非仅依赖后台闹钟。",
          "通知内容包含文章标题与摘要片段。您可在扩展设置中关闭通知或调整提醒模式。"
        ]
      },
      {
        h: "订阅与支付",
        p: [
          "付费方案（Pro 每月 $9.90，Unlimited 每月 $39.90）通过 Gumroad 销售，Gumroad 为记录商户。支付卡号与账单信息由 Gumroad 收集处理，扩展与 Aivelo 服务器均不存储。",
          "我们接收 Gumroad 的订阅状态、档位、买家邮箱及 Webhook 数据以激活账户功能。计费详情请参阅<a href=\"payment-terms.html\">付款条款</a>。"
        ]
      },
      {
        h: "AI 邮件摘要",
        p: [
          "Unlimited 订阅用户于本地时区每日 22:00 收到 AI 资讯摘要邮件，由 Resend 发送。已登录且非 Unlimited 的用户可收到一次性试用摘要。",
          "每封摘要邮件均含退订链接。退订仅停止后续邮件，不会取消 Gumroad 订阅。"
        ]
      },
      {
        h: "第三方服务",
        p: ["我们依赖以下服务提供商："],
        ul: [
          "<strong>Supabase</strong> — 身份验证、数据库、Edge Functions 与偏好同步",
          "<strong>DeepSeek</strong> — 服务端 AI 摘要生成",
          "<strong>Resend</strong> — 事务性与摘要邮件发送",
          "<strong>Gumroad</strong> — 订阅结账、计费与客户管理",
          "<strong>RSS 发布方</strong> — 白名单源中的原始新闻来源"
        ]
      },
      {
        h: "数据保留",
        p: [
          "在账户有效期间及提供服务、履行法定义务、解决争议与执行协议所需期间内，我们保留账户、偏好、分析与订阅数据。",
          "汇总或去标识化的分析数据可能保留更久。您可依法请求删除个人数据，但须符合合法保留需求。"
        ]
      },
      {
        h: "您的权利与选择",
        p: [
          "根据您所在司法辖区，您可能享有访问、更正、删除、限制或导出个人数据，以及反对特定处理的权利。",
          "请发送邮件至 <a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a> 行使上述权利。我们将依法在合理期限内回复。"
        ]
      },
      {
        h: "儿童隐私",
        p: [
          "Industry AI News 不面向 13 岁以下儿童（或当地法律要求的 16 岁以下用户）。我们不会故意收集儿童个人信息。若您认为儿童向我们提供了数据，请联系我们，我们将及时删除。"
        ]
      },
      {
        h: "国际用户",
        p: [
          "Aivelo 运营所在法域可能与您不同。使用本扩展即表示您理解，您的信息可能在服务提供商所在国家/地区处理，并在法律要求时采取适当保障措施。"
        ]
      },
      {
        h: "政策变更",
        p: [
          "我们可能不时更新本隐私政策，文首「最后更新」日期将反映最新版本。重大变更可能通过扩展或邮件通知。变更后继续使用即视为接受更新后的政策。"
        ]
      },
      {
        h: "Chrome 扩展权限",
        p: ["Industry AI News 请求以下 Chrome 权限："],
        ul: [
          "<strong>storage</strong> — 保存偏好、匿名 ID 与缓存状态",
          "<strong>alarms</strong> — 调度后台资讯检查与提醒",
          "<strong>notifications</strong> — 显示新文章提醒",
          "<strong>identity</strong> — 通过 Chrome Identity API 进行 Google 登录",
          "<strong>host permissions</strong> — 获取 RSS 源并与 Aivelo/Supabase 后端通信"
        ]
      },
      {
        h: "联系我们",
        p: [
          "隐私相关问题或请求，请发送邮件至 <a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>。",
          "Aivelo — <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>"
        ]
      }
    ]
  },
  ja: {
    title: "プライバシーポリシー — Industry AI News",
    updatedLabel: "最終更新日：2026年6月2日",
    footer: "© 2026 Aivelo. All rights reserved.",
    siblingLink: { label: "お支払い条件", href: "payment-terms.html" },
    sections: [
      {
        h: "はじめに",
        p: [
          "本プライバシーポリシーは、Aivelo（「当社」）が <strong>Industry AI News</strong> Chrome 拡張機能および <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a> 上の関連サービスをご利用いただく際に、どのような情報を収集・利用・保護するかを説明するものです。拡張機能のインストールまたは利用により、本ポリシーに同意したものとみなします。",
          "Industry AI News はホワイトリスト登録された RSS フィードから業界ニュースを集約し、AI 要約を生成し、必要に応じて設定やサブスクリプションを端末間で同期します。当社はこれらの機能に必要な情報のみを収集するよう設計しています。"
        ]
      },
      {
        h: "収集する情報",
        p: ["当社が収集する可能性のある情報の種類は以下のとおりです。"],
        ul: [
          "<strong>アカウント情報</strong> — Google ログインまたは Supabase Auth によるメール OTP でサインインした場合、ログインに紐づくアカウント識別子とメールアドレス。",
          "<strong>設定・プリファレンス</strong> — フォローするトピック、リマインダー、UI テーマ、言語など。<code>chrome.storage.sync</code> および <code>chrome.storage.local</code> に保存され、有料プランではサーバーにも同期されます。",
          "<strong>利用・操作データ</strong> — 分析用の匿名ユーザー ID とデバイスフィンガープリント。設定スナップショット（track-prefs）や記事へのいいね・低評価・既読（track-article-action）を含みます。",
          "<strong>ニュースのメタデータ</strong> — RSS から取得する記事 URL、タイトル、公開日。AI 要約の生成とニュース配信のためサーバーに送信されます。",
          "<strong>サブスクリプション状態</strong> — プラン（Free、Pro、Unlimited）。Gumroad 購入後、アカウントのメールに紐づけられます。",
          "<strong>メールダイジェスト関連</strong> — Unlimited 加入者および対象の試用ユーザー向けに、メールアドレスとダイジェスト設定。"
        ]
      },
      {
        h: "情報の利用目的",
        p: [
          "収集した情報は、サイドパネルでの RSS ニュース表示、AI 要約、ブラウザ通知・リマインダー、Pro/Unlimited ユーザーの端末間同期、サブスクリプション処理、メールダイジェストの送信、サービス改善、サポート対応に使用します。",
          "当社はお客様のデータを<strong>無関係な第三者 AI モデルの学習に使用せず</strong>、個人情報を<strong>販売しません</strong>。"
        ]
      },
      {
        h: "AI 要約",
        p: [
          "AI 要約は Supabase Edge Functions 経由でサーバー側（DeepSeek）で生成されます。要約のリクエスト時、記事 URL とタイトル（パスワードや決済情報などの機密情報は除く）がバックエンドに送信されます。重複リクエストを減らすため要約はキャッシュされます。",
          "AI の出力は不完全な場合があります。情報提供を目的としており、専門的助言として依拠すべきではありません。"
        ]
      },
      {
        h: "認証",
        p: [
          "基本機能はログイン不要ですが、端末間同期、有料プラン、メールダイジェストの試用にはサインインが必要です。Google ログインとメール OTP は Supabase Auth が処理します。",
          "ログインメールは Gumroad 購入と拡張機能アカウントの照合にも使用されます。"
        ]
      },
      {
        h: "ローカル保存と同期",
        p: [
          "拡張機能は Chrome のストレージ API で設定をローカル保存します。Pro/Unlimited では Supabase（<code>user_extension_preferences</code>）にも保存し端末間同期を行います。競合はタイムスタンプに基づく LWW で解決します。",
          "拡張機能のアンインストールまたは Chrome 設定からのデータ削除でローカルデータは消去できます。クラウドデータは削除依頼まで残る場合があります。"
        ]
      },
      {
        h: "通知とバックグラウンド動作",
        p: [
          "サイドパネルが閉じている間、Chrome の alarms と notifications を用いて、設定に従い新着記事を通知します。パネルが開いている間はポーリングで更新します。",
          "通知には記事タイトルと要約の抜粋が含まれます。設定で通知を無効化したりリマインダーモードを変更できます。"
        ]
      },
      {
        h: "サブスクリプションと決済",
        p: [
          "有料プラン（Pro 月額 $9.90、Unlimited 月額 $39.90）は Gumroad（Merchant of Record）経由で販売されます。カード情報等は Gumroad が処理し、拡張機能や Aivelo サーバーには保存されません。",
          "Gumroad からサブスクリプション状態、プラン、購入者メール、Webhook データを受け取り機能を有効化します。詳細は<a href=\"payment-terms.html\">お支払い条件</a>をご覧ください。"
        ]
      },
      {
        h: "AI メールダイジェスト",
        p: [
          "Unlimited 加入者には現地時間 22:00 に Resend 経由で日次 AI ニュースダイジェストを送信します。ログイン済みで Unlimited 以外のユーザーは一度限りの試用ダイジェストを受け取れる場合があります。",
          "各メールに配信停止リンクがあります。停止しても Gumroad サブスクリプションは解約されません。"
        ]
      },
      {
        h: "第三者サービス",
        p: ["当社は以下のサービスプロバイダーを利用します。"],
        ul: [
          "<strong>Supabase</strong> — 認証、データベース、Edge Functions、設定同期",
          "<strong>DeepSeek</strong> — サーバー側 AI 要約",
          "<strong>Resend</strong> — トランザクションメール・ダイジェスト配信",
          "<strong>Gumroad</strong> — サブスクリプション決済・顧客管理",
          "<strong>RSS 配信元</strong> — ホワイトリストフィードのニュースソース"
        ]
      },
      {
        h: "データの保存期間",
        p: [
          "アカウント、設定、分析、サブスクリプションデータは、アカウントが有効な期間およびサービス提供・法的義務・紛争解決に必要な期間保持します。",
          "集計または匿名化された分析データはより長期間保持される場合があります。適用法に従い個人データの削除を請求できます。"
        ]
      },
      {
        h: "お客様の権利",
        p: [
          "お住まいの法域により、アクセス、訂正、削除、処理制限、データポータビリティ、異議申立ての権利を有する場合があります。",
          "<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a> までご連絡ください。適用法に従い合理的な期間内に対応します。"
        ]
      },
      {
        h: "お子様のプライバシー",
        p: [
          "Industry AI News は 13 歳未満（または当地法で 16 歳未満）のお子様を対象としていません。故意にお子様の個人情報を収集しません。該当する場合はご連絡いただければ速やかに削除します。"
        ]
      },
      {
        h: "国際的な利用",
        p: [
          "Aivelo の運営地域はお客様の地域と異なる場合があります。拡張機能の利用により、サービスプロバイダー所在国での情報処理に同意したものとみなし、法が求める場合は適切な保護措置を講じます。"
        ]
      },
      {
        h: "ポリシーの変更",
        p: [
          "本ポリシーは随時更新される場合があります。ページ上部の更新日が最新版を示します。重要な変更は拡張機能またはメールでお知らせする場合があります。変更後の継続利用は更新版への同意とみなします。"
        ]
      },
      {
        h: "Chrome 拡張機能の権限",
        p: ["Industry AI News が要求する Chrome 権限："],
        ul: [
          "<strong>storage</strong> — 設定、匿名 ID、キャッシュの保存",
          "<strong>alarms</strong> — バックグラウンドのニュース確認・リマインダー",
          "<strong>notifications</strong> — 新着記事アラート",
          "<strong>identity</strong> — Chrome Identity API による Google ログイン",
          "<strong>host permissions</strong> — RSS 取得および Aivelo/Supabase バックエンドとの通信"
        ]
      },
      {
        h: "お問い合わせ",
        p: [
          "プライバシーに関するご質問・ご請求：<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>",
          "Aivelo — <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>"
        ]
      }
    ]
  },
  ko: {
    title: "개인정보 처리방침 — Industry AI News",
    updatedLabel: "최종 업데이트: 2026년 6월 2일",
    footer: "© 2026 Aivelo. All rights reserved.",
    siblingLink: { label: "결제 약관", href: "payment-terms.html" },
    sections: [
      {
        h: "소개",
        p: [
          "본 개인정보 처리방침은 Aivelo(「당사」)가 <strong>Industry AI News</strong> Chrome 확장 프로그램 및 <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a> 관련 서비스 이용 시 정보를 어떻게 수집·이용·보호하는지 설명합니다. 확장 프로그램을 설치하거나 사용하면 본 방침에 동의한 것으로 간주됩니다.",
          "Industry AI News는 허용 목록 RSS 피드에서 업계 뉴스를 모으고 AI 요약을 생성하며, 필요 시 설정과 구독을 기기 간 동기화합니다. 당사는 이러한 기능에 필요한 정보만 수집하도록 설계했습니다."
        ]
      },
      {
        h: "수집하는 정보",
        p: ["당사가 수집할 수 있는 정보 유형은 다음과 같습니다."],
        ul: [
          "<strong>계정 정보</strong> — Google 로그인 또는 Supabase Auth 이메일 OTP로 로그인한 경우, 로그인과 연결된 계정 식별자 및 이메일 주소.",
          "<strong>환경설정</strong> — 관심 주제, 알림 설정, UI 테마, 언어 등. <code>chrome.storage.sync</code> 및 <code>chrome.storage.local</code>에 저장되며 유료 플랜은 서버에도 동기화됩니다.",
          "<strong>이용·상호작용 데이터</strong> — 분석용 익명 사용자 ID 및 기기 지문, 환경설정 스냅샷(track-prefs), 좋아요·싫어요·읽음(track-article-action) 등.",
          "<strong>뉴스 메타데이터</strong> — RSS 기사 URL, 제목, 게시일. AI 요약 및 뉴스 제공을 위해 서버로 전송됩니다.",
          "<strong>구독 상태</strong> — 플랜(Free, Pro, Unlimited). Gumroad 구매 후 계정 이메일과 연결됩니다.",
          "<strong>이메일 다이제스트</strong> — Unlimited 구독자 및 자격 있는 체험 사용자의 이메일 및 다이제스트 설정."
        ]
      },
      {
        h: "정보 이용 목적",
        p: [
          "수집 정보는 사이드 패널 RSS 뉴스, AI 요약, 브라우저 알림·리마인더, Pro/Unlimited 기기 간 동기화, 구독 처리, 이메일 다이제스트, 서비스 개선, 지원 응대에 사용됩니다.",
          "당사는 귀하의 데이터를 <strong>무관한 제3자 AI 모델 학습에 사용하지 않으며</strong>, 개인정보를 <strong>판매하지 않습니다</strong>."
        ]
      },
      {
        h: "AI 요약",
        p: [
          "AI 요약은 Supabase Edge Functions를 통해 서버(DeepSeek)에서 생성됩니다. 요약 요청 시 기사 URL과 제목(비밀번호·결제 정보 등은 제외)이 백엔드로 전송됩니다. 중복 요청을 줄이기 위해 캐시됩니다.",
          "AI 출력은 부정확할 수 있으며 정보 제공 목적이며 전문적 조언으로 의존해서는 안 됩니다."
        ]
      },
      {
        h: "인증",
        p: [
          "기본 기능은 로그인 없이 사용 가능하나, 기기 간 동기화·유료 플랜·이메일 다이제스트 체험에는 로그인이 필요합니다. Google 로그인과 이메일 OTP는 Supabase Auth가 처리합니다.",
          "로그인 이메일은 Gumroad 구매와 확장 프로그램 계정 매칭에도 사용됩니다."
        ]
      },
      {
        h: "로컬 저장 및 동기화",
        p: [
          "확장 프로그램은 Chrome 저장소 API로 설정을 로컬에 보관합니다. Pro/Unlimited는 Supabase(<code>user_extension_preferences</code>)에도 저장되어 기기 간 동기화됩니다. 충돌은 타임스탬프 기준 LWW로 해결합니다.",
          "확장 프로그램 제거 또는 Chrome 설정에서 데이터 삭제로 로컬 데이터를 지울 수 있습니다. 클라우드 데이터는 삭제 요청 전까지 남을 수 있습니다."
        ]
      },
      {
        h: "알림 및 백그라운드 활동",
        p: [
          "사이드 패널이 닫혀 있을 때 Chrome alarms·notifications로 설정에 따라 새 기사를 알립니다. 패널이 열려 있으면 폴링으로 업데이트합니다.",
          "알림에는 기사 제목과 요약 일부가 포함됩니다. 설정에서 알림을 끄거나 리마인더 모드를 변경할 수 있습니다."
        ]
      },
      {
        h: "구독 및 결제",
        p: [
          "유료 플랜(Pro 월 $9.90, Unlimited 월 $39.90)은 Gumroad(Merchant of Record)를 통해 판매됩니다. 카드 정보 등은 Gumroad가 처리하며 확장 프로그램·Aivelo 서버에는 저장되지 않습니다.",
          "Gumroad에서 구독 상태, 플랜, 구매자 이메일, Webhook 데이터를 받아 기능을 활성화합니다. 자세한 내용은 <a href=\"payment-terms.html\">결제 약관</a>을 참조하세요."
        ]
      },
      {
        h: "AI 이메일 다이제스트",
        p: [
          "Unlimited 구독자에게 현지 시간 22:00에 Resend로 일일 AI 뉴스 다이제스트를 발송합니다. 로그인한 비-Unlimited 사용자는 1회 체험 다이제스트를 받을 수 있습니다.",
          "각 이메일에 수신 거부 링크가 있습니다. 수신 거부는 Gumroad 구독 해지와 별개입니다."
        ]
      },
      {
        h: "제3자 서비스",
        p: ["당사가 이용하는 서비스 제공업체:"],
        ul: [
          "<strong>Supabase</strong> — 인증, 데이터베이스, Edge Functions, 설정 동기화",
          "<strong>DeepSeek</strong> — 서버 AI 요약",
          "<strong>Resend</strong> — 거래·다이제스트 이메일",
          "<strong>Gumroad</strong> — 구독 결제·고객 관리",
          "<strong>RSS 발행자</strong> — 허용 목록 피드의 뉴스 출처"
        ]
      },
      {
        h: "데이터 보존",
        p: [
          "계정·설정·분석·구독 데이터는 계정이 활성인 기간 및 서비스 제공·법적 의무·분쟁 해결에 필요한 기간 동안 보존합니다.",
          "집계 또는 비식별 분석 데이터는 더 오래 보존될 수 있습니다. 관련 법령에 따라 개인정보 삭제를 요청할 수 있습니다."
        ]
      },
      {
        h: "귀하의 권리",
        p: [
          "관할 지역에 따라 열람, 정정, 삭제, 처리 제한, 데이터 이동, 이의 제기 권리가 있을 수 있습니다.",
          "<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>으로 문의해 주세요. 관련 법령에 따라 합리적 기간 내 응답합니다."
        ]
      },
      {
        h: "아동 개인정보",
        p: [
          "Industry AI News는 13세 미만(또는 현지법상 16세 미만) 아동을 대상으로 하지 않으며, 고의로 아동 개인정보를 수집하지 않습니다. 해당 사실을 알게 되면 연락 주시면 신속히 삭제합니다."
        ]
      },
      {
        h: "국제 사용자",
        p: [
          "Aivelo 운영 지역은 귀하의 지역과 다를 수 있습니다. 확장 프로그램 사용 시 서비스 제공업체가 소재한 국가에서 정보가 처리될 수 있음을 이해하며, 법이 요구하는 경우 적절한 보호 조치를 적용합니다."
        ]
      },
      {
        h: "방침 변경",
        p: [
          "본 방침은 수시로 업데이트될 수 있습니다. 상단 업데이트 날짜가 최신 버전을 나타냅니다. 중요 변경은 확장 프로그램 또는 이메일로 안내할 수 있습니다. 변경 후 계속 사용 시 업데이트된 방침에 동의한 것으로 봅니다."
        ]
      },
      {
        h: "Chrome 확장 프로그램 권한",
        p: ["Industry AI News가 요청하는 Chrome 권한:"],
        ul: [
          "<strong>storage</strong> — 설정, 익명 ID, 캐시 저장",
          "<strong>alarms</strong> — 백그라운드 뉴스 확인·리마인더",
          "<strong>notifications</strong> — 새 기사 알림",
          "<strong>identity</strong> — Chrome Identity API Google 로그인",
          "<strong>host permissions</strong> — RSS 가져오기 및 Aivelo/Supabase 백엔드 통신"
        ]
      },
      {
        h: "문의",
        p: [
          "개인정보 문의·요청: <a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>",
          "Aivelo — <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>"
        ]
      }
    ]
  },
  fr: {
    title: "Politique de confidentialité — Industry AI News",
    updatedLabel: "Dernière mise à jour : 2 juin 2026",
    footer: "© 2026 Aivelo. Tous droits réservés.",
    siblingLink: { label: "Conditions de paiement", href: "payment-terms.html" },
    sections: [
      { h: "Introduction", p: ["La présente Politique de confidentialité décrit comment Aivelo (« nous ») collecte, utilise et protège les informations lorsque vous utilisez l'extension Chrome <strong>Industry AI News</strong> et les services associés sur <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>. En installant ou en utilisant l'extension, vous acceptez les pratiques décrites ici.", "Industry AI News agrège des actualités sectorielles depuis des flux RSS autorisés, génère des résumés IA et peut synchroniser préférences et abonnements entre appareils. Nous ne collectons que les données nécessaires à ces fonctionnalités."] },
      { h: "Informations collectées", p: ["Nous pouvons collecter les catégories suivantes :"], ul: ["<strong>Compte</strong> — identifiant et e-mail si vous vous connectez via Google ou OTP e-mail (Supabase Auth).", "<strong>Préférences</strong> — sujets suivis, rappels, thème, langue, stockés dans <code>chrome.storage.sync</code> et <code>chrome.storage.local</code>, synchronisés pour les offres payantes.", "<strong>Usage</strong> — ID utilisateur anonyme et empreinte appareil ; snapshots de préférences (track-prefs) et actions sur articles (like, dislike, lu) via track-article-action.", "<strong>Métadonnées d'articles</strong> — URL, titres et dates des flux RSS, transmis pour les résumés IA.", "<strong>Abonnement</strong> — niveau Free, Pro ou Unlimited, lié à l'e-mail après achat Gumroad.", "<strong>Digest e-mail</strong> — adresse et préférences pour les abonnés Unlimited et l'essai éligible."] },
      { h: "Utilisation des informations", p: ["Nous utilisons ces données pour l'agrégation RSS dans le panneau latéral, les résumés IA, les notifications et rappels, la synchronisation Pro/Unlimited, la gestion des abonnements, l'envoi de digests, l'amélioration du service et le support.", "Nous <strong>ne vendons pas</strong> vos données personnelles et ne les utilisons pas pour entraîner des modèles IA tiers sans rapport avec le service."] },
      { h: "Résumés IA", p: ["Les résumés sont générés côté serveur via Supabase Edge Functions et DeepSeek. Les URL et titres d'articles (pas mots de passe ni données de paiement) sont transmis à notre backend. Les résumés sont mis en cache.", "Les sorties IA peuvent être imparfaites ; elles sont informatives et ne constituent pas un conseil professionnel."] },
      { h: "Authentification", p: ["La connexion est optionnelle pour l'usage de base, requise pour la sync multi-appareils, les offres payantes et l'essai digest. Google et OTP e-mail sont gérés par Supabase Auth.", "Votre e-mail sert aussi à associer les achats Gumroad à votre compte extension."] },
      { h: "Stockage local et synchronisation", p: ["Les préférences sont stockées localement via les API Chrome. Pour Pro et Unlimited, elles sont aussi enregistrées dans Supabase (<code>user_extension_preferences</code>) avec résolution de conflits LWW.", "Désinstallez l'extension ou effacez ses données dans Chrome pour supprimer les données locales ; les données cloud peuvent persister jusqu'à demande de suppression."] },
      { h: "Notifications et activité en arrière-plan", p: ["Panneau fermé : alarmes et notifications Chrome selon vos rappels. Panneau ouvert : polling des mises à jour.", "Les notifications incluent titres et extraits de résumé. Vous pouvez les désactiver dans les paramètres."] },
      { h: "Abonnements et paiements", p: ["Pro (9,90 $/mois) et Unlimited (49,90 $/mois) sont vendus via Gumroad (Merchant of Record). Les données de carte sont traitées par Gumroad, pas stockées par l'extension ou Aivelo.", "Nous recevons statut, plan, e-mail acheteur et webhooks Gumroad pour activer les fonctionnalités. Voir nos <a href=\"payment-terms.html\">Conditions de paiement</a>."] },
      { h: "Digest e-mail IA", p: ["Les abonnés Unlimited reçoivent un digest quotidien à 22h (heure locale) via Resend. Les utilisateurs connectés non-Unlimited peuvent recevoir un essai unique.", "Chaque e-mail contient un lien de désabonnement. Se désabonner n'annule pas l'abonnement Gumroad."] },
      { h: "Services tiers", p: ["Nous utilisons :"], ul: ["<strong>Supabase</strong> — auth, base, edge functions, sync", "<strong>DeepSeek</strong> — résumés IA serveur", "<strong>Resend</strong> — e-mails transactionnels et digest", "<strong>Gumroad</strong> — checkout et facturation", "<strong>Éditeurs RSS</strong> — sources des flux autorisés"] },
      { h: "Conservation", p: ["Nous conservons les données tant que le compte est actif ou que nécessaire pour le service, obligations légales et litiges.", "Les analyses agrégées ou anonymisées peuvent être conservées plus longtemps. Vous pouvez demander la suppression selon la loi applicable."] },
      { h: "Vos droits", p: ["Selon votre juridiction : accès, rectification, suppression, limitation, portabilité, opposition.", "Contact : <a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>. Réponse dans un délai raisonnable."] },
      { h: "Enfants", p: ["Le service n'est pas destiné aux moins de 13 ans (ou 16 selon la loi locale). Nous ne collectons pas sciemment de données d'enfants. Contactez-nous pour suppression."] },
      { h: "Utilisateurs internationaux", p: ["Vos données peuvent être traitées dans les pays où nos prestataires opèrent, avec garanties appropriées si la loi l'exige."] },
      { h: "Modifications", p: ["Nous pouvons mettre à jour cette politique ; la date en tête indique la dernière version. L'utilisation continue vaut acceptation."] },
      { h: "Permissions Chrome", p: ["Permissions demandées :"], ul: ["<strong>storage</strong> — préférences et cache", "<strong>alarms</strong> — vérifications et rappels", "<strong>notifications</strong> — alertes nouveaux articles", "<strong>identity</strong> — connexion Google", "<strong>host permissions</strong> — flux RSS et backend Aivelo/Supabase"] },
      { h: "Contact", p: ["<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>", "Aivelo — <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>"] }
    ]
  },
  de: {
    title: "Datenschutzerklärung — Industry AI News",
    updatedLabel: "Zuletzt aktualisiert: 2. Juni 2026",
    footer: "© 2026 Aivelo. Alle Rechte vorbehalten.",
    siblingLink: { label: "Zahlungsbedingungen", href: "payment-terms.html" },
    sections: [
      { h: "Einleitung", p: ["Diese Datenschutzerklärung beschreibt, wie Aivelo („wir“) Informationen erhebt, nutzt und schützt, wenn Sie die Chrome-Erweiterung <strong>Industry AI News</strong> und zugehörige Dienste unter <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a> nutzen. Mit Installation oder Nutzung stimmen Sie diesen Praktiken zu.", "Industry AI News aggregiert Branchennews aus whitelisted RSS-Feeds, erzeugt KI-Zusammenfassungen und synchronisiert optional Einstellungen und Abos geräteübergreifend."] },
      { h: "Erhobene Informationen", p: ["Wir können folgende Kategorien erheben:"], ul: ["<strong>Konto</strong> — Kennung und E-Mail bei Google- oder E-Mail-OTP-Anmeldung (Supabase Auth).", "<strong>Einstellungen</strong> — Themen, Erinnerungen, Theme, Sprache in <code>chrome.storage.sync</code> / <code>local</code>; bei Paid-Plänen auch serverseitig.", "<strong>Nutzung</strong> — anonyme Nutzer-ID, Geräte-Fingerprint, track-prefs, track-article-action (Like/Dislike/Gelesen).", "<strong>Artikel-Metadaten</strong> — URLs, Titel, Datum aus RSS für KI-Zusammenfassungen.", "<strong>Abo-Status</strong> — Free, Pro oder Unlimited, verknüpft mit Konto-E-Mail nach Gumroad-Kauf.", "<strong>E-Mail-Digest</strong> — E-Mail und Einstellungen für Unlimited und berechtigte Testnutzer."] },
      { h: "Verwendung", p: ["Daten dienen RSS-Aggregation im Sidepanel, KI-Zusammenfassungen, Benachrichtigungen, Sync (Pro/Unlimited), Abo-Verwaltung, E-Mail-Digest, Produktverbesserung und Support.", "Wir <strong>verkaufen</strong> keine personenbezogenen Daten und nutzen sie nicht zum Training fremder KI-Modelle außerhalb des Dienstes."] },
      { h: "KI-Zusammenfassungen", p: ["Serverseitig via Supabase Edge Functions und DeepSeek. URLs und Titel (keine Passwörter/Zahlungsdaten) werden übermittelt; Ergebnisse werden gecacht.", "KI-Ausgaben können fehlerhaft sein und ersetzen keine professionelle Beratung."] },
      { h: "Authentifizierung", p: ["Anmeldung optional für Basisnutzung; erforderlich für Sync, Paid-Pläne und Digest-Test. Google und E-Mail-OTP über Supabase Auth.", "Login-E-Mail verknüpft Gumroad-Käufe mit dem Erweiterungskonto."] },
      { h: "Speicher und Sync", p: ["Lokal via Chrome-Storage; Pro/Unlimited zusätzlich in Supabase (<code>user_extension_preferences</code>), Konflikte per LWW.", "Deinstallation oder Löschen der Erweiterungsdaten entfernt lokale Daten; Cloud-Daten bis zur Löschanfrage."] },
      { h: "Benachrichtigungen", p: ["Sidepanel geschlossen: Chrome alarms/notifications. Offen: Polling.", "Inhalt: Titel und Kurz-Zusammenfassung. Deaktivierung in den Einstellungen möglich."] },
      { h: "Abos und Zahlung", p: ["Pro (9,90 USD/Monat) und Unlimited (49,90 USD/Monat) über Gumroad (Merchant of Record). Zahlungsdaten nur bei Gumroad.", "Wir erhalten Abo-Status, Plan, Käufer-E-Mail und Webhooks. Details: <a href=\"payment-terms.html\">Zahlungsbedingungen</a>."] },
      { h: "E-Mail-Digest", p: ["Unlimited: täglicher Digest um 22:00 Ortszeit via Resend. Einmaliger Test für eingeloggte Nicht-Unlimited-Nutzer.", "Abmeldelink in jeder E-Mail; beendet nicht das Gumroad-Abo."] },
      { h: "Drittanbieter", p: ["Wir nutzen:"], ul: ["<strong>Supabase</strong>", "<strong>DeepSeek</strong>", "<strong>Resend</strong>", "<strong>Gumroad</strong>", "<strong>RSS-Herausgeber</strong>"] },
      { h: "Aufbewahrung", p: ["Solange Konto aktiv oder für Service, Rechtspflichten und Streitigkeiten nötig.", "Aggregierte/anonymisierte Daten ggf. länger. Löschung auf Anfrage nach geltendem Recht."] },
      { h: "Ihre Rechte", p: ["Je nach Recht: Auskunft, Berichtigung, Löschung, Einschränkung, Portabilität, Widerspruch.", "<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>"] },
      { h: "Kinder", p: ["Nicht für unter 13 (bzw. 16 nach lokalem Recht). Keine wissentliche Erhebung bei Kindern."] },
      { h: "Internationale Nutzer", p: ["Verarbeitung in Ländern unserer Anbieter mit angemessenen Schutzmaßnahmen."] },
      { h: "Änderungen", p: ["Aktualisierungen mit Datum oben; fortgesetzte Nutzung gilt als Zustimmung."] },
      { h: "Chrome-Berechtigungen", p: ["Angefordert:"], ul: ["<strong>storage</strong>", "<strong>alarms</strong>", "<strong>notifications</strong>", "<strong>identity</strong>", "<strong>host permissions</strong>"] },
      { h: "Kontakt", p: ["<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>", "Aivelo — <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>"] }
    ]
  },
  es: {
    title: "Política de privacidad — Industry AI News",
    updatedLabel: "Última actualización: 2 de junio de 2026",
    footer: "© 2026 Aivelo. Todos los derechos reservados.",
    siblingLink: { label: "Condiciones de pago", href: "payment-terms.html" },
    sections: [
      { h: "Introducción", p: ["Esta Política de privacidad describe cómo Aivelo («nosotros») recopila, usa y protege la información al usar la extensión de Chrome <strong>Industry AI News</strong> y servicios relacionados en <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>. Al instalar o usar la extensión, acepta estas prácticas.", "Industry AI News agrega noticias sectoriales de feeds RSS autorizados, genera resúmenes con IA y puede sincronizar preferencias y suscripciones entre dispositivos."] },
      { h: "Información que recopilamos", p: ["Categorías posibles:"], ul: ["<strong>Cuenta</strong> — identificador y correo con Google o OTP por correo (Supabase Auth).", "<strong>Preferencias</strong> — temas, recordatorios, tema UI, idioma en <code>chrome.storage.sync</code> y <code>local</code>; sync en planes de pago.", "<strong>Uso</strong> — ID anónimo, huella de dispositivo, track-prefs, acciones en artículos (me gusta, no me gusta, leído).", "<strong>Metadatos</strong> — URL, títulos y fechas de RSS para resúmenes IA.", "<strong>Suscripción</strong> — Free, Pro o Unlimited vinculado al correo tras compra en Gumroad.", "<strong>Digest por correo</strong> — correo y preferencias para Unlimited y prueba elegible."] },
      { h: "Uso de la información", p: ["Para agregación RSS en el panel lateral, resúmenes IA, notificaciones, sync Pro/Unlimited, suscripciones, digest por correo, mejora del servicio y soporte.", "No <strong>vendemos</strong> datos personales ni los usamos para entrenar modelos IA ajenos al servicio."] },
      { h: "Resúmenes IA", p: ["Generados en servidor vía Supabase Edge Functions y DeepSeek. Se envían URL y títulos (no contraseñas ni pagos). Resultados en caché.", "La IA puede errar; es informativa, no asesoramiento profesional."] },
      { h: "Autenticación", p: ["Opcional para uso básico; requerida para sync, planes de pago y prueba de digest. Google y OTP vía Supabase Auth.", "El correo de inicio de sesión vincula compras Gumroad con la cuenta."] },
      { h: "Almacenamiento y sync", p: ["Local con APIs de Chrome; Pro/Unlimited también en Supabase (<code>user_extension_preferences</code>), conflictos LWW.", "Desinstalar o borrar datos locales; datos en la nube hasta solicitud de eliminación."] },
      { h: "Notificaciones", p: ["Panel cerrado: alarmas y notificaciones Chrome. Abierto: sondeo.", "Incluyen título y fragmento de resumen. Configurables en ajustes."] },
      { h: "Suscripciones y pagos", p: ["Pro (9,90 USD/mes) y Unlimited (49,90 USD/mes) vía Gumroad (Merchant of Record). Datos de pago solo en Gumroad.", "Recibimos estado, plan, correo del comprador y webhooks. Ver <a href=\"payment-terms.html\">Condiciones de pago</a>."] },
      { h: "Digest por correo IA", p: ["Unlimited: digest diario a las 22:00 hora local vía Resend. Prueba única para usuarios con sesión no Unlimited.", "Enlace de baja en cada correo; no cancela la suscripción Gumroad."] },
      { h: "Terceros", p: ["Proveedores:"], ul: ["<strong>Supabase</strong>", "<strong>DeepSeek</strong>", "<strong>Resend</strong>", "<strong>Gumroad</strong>", "<strong>Editores RSS</strong>"] },
      { h: "Conservación", p: ["Mientras la cuenta esté activa o sea necesario para el servicio y obligaciones legales.", "Análisis agregados/anónimos pueden conservarse más. Derecho de supresión según ley aplicable."] },
      { h: "Sus derechos", p: ["Acceso, rectificación, supresión, limitación, portabilidad u oposición según jurisdicción.", "<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>"] },
      { h: "Menores", p: ["No dirigido a menores de 13 (o 16 según ley local). No recopilamos datos de menores a sabiendas."] },
      { h: "Usuarios internacionales", p: ["Procesamiento en países de nuestros proveedores con salvaguardas cuando la ley lo exija."] },
      { h: "Cambios", p: ["Actualizaciones con fecha arriba; el uso continuado implica aceptación."] },
      { h: "Permisos de Chrome", p: ["Solicitados:"], ul: ["<strong>storage</strong>", "<strong>alarms</strong>", "<strong>notifications</strong>", "<strong>identity</strong>", "<strong>host permissions</strong>"] },
      { h: "Contacto", p: ["<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>", "Aivelo — <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>"] }
    ]
  },
  pt: {
    title: "Política de Privacidade — Industry AI News",
    updatedLabel: "Última atualização: 2 de junho de 2026",
    footer: "© 2026 Aivelo. Todos os direitos reservados.",
    siblingLink: { label: "Termos de pagamento", href: "payment-terms.html" },
    sections: [
      { h: "Introdução", p: ["Esta Política de Privacidade descreve como a Aivelo («nós») recolhe, utiliza e protege informações quando você usa a extensão Chrome <strong>Industry AI News</strong> e serviços relacionados em <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>. Ao instalar ou usar a extensão, você concorda com estas práticas.", "O Industry AI News agrega notícias setoriais de feeds RSS autorizados, gera resumos de IA e pode sincronizar preferências e assinaturas entre dispositivos."] },
      { h: "Informações recolhidas", p: ["Categorias possíveis:"], ul: ["<strong>Conta</strong> — identificador e e-mail com Google ou OTP por e-mail (Supabase Auth).", "<strong>Preferências</strong> — tópicos, lembretes, tema, idioma em <code>chrome.storage.sync</code> e <code>local</code>; sync em planos pagos.", "<strong>Uso</strong> — ID anónimo, impressão digital do dispositivo, track-prefs, ações em artigos (gostar, não gostar, lido).", "<strong>Metadados</strong> — URL, títulos e datas de RSS para resumos de IA.", "<strong>Assinatura</strong> — Free, Pro ou Unlimited ligado ao e-mail após compra Gumroad.", "<strong>Digest por e-mail</strong> — e-mail e preferências para Unlimited e teste elegível."] },
      { h: "Uso das informações", p: ["Para agregação RSS no painel lateral, resumos de IA, notificações, sync Pro/Unlimited, assinaturas, digest por e-mail, melhoria do serviço e suporte.", "Não <strong>vendemos</strong> dados pessoais nem os usamos para treinar modelos de IA alheios ao serviço."] },
      { h: "Resumos de IA", p: ["Gerados no servidor via Supabase Edge Functions e DeepSeek. URL e títulos (não senhas nem pagamentos) são enviados; resultados em cache.", "A IA pode errar; é informativa, não aconselhamento profissional."] },
      { h: "Autenticação", p: ["Opcional para uso básico; necessária para sync, planos pagos e teste de digest. Google e OTP via Supabase Auth.", "O e-mail de login associa compras Gumroad à conta da extensão."] },
      { h: "Armazenamento e sync", p: ["Local via APIs Chrome; Pro/Unlimited também no Supabase (<code>user_extension_preferences</code>), conflitos LWW.", "Desinstalar ou apagar dados locais; dados na nuvem até pedido de eliminação."] },
      { h: "Notificações", p: ["Painel fechado: alarmes e notificações Chrome. Aberto: polling.", "Incluem título e excerto de resumo. Configurável nas definições."] },
      { h: "Assinaturas e pagamentos", p: ["Pro (US$ 9,90/mês) e Unlimited (US$ 49,90/mês) via Gumroad (Merchant of Record). Dados de pagamento só na Gumroad.", "Recebemos estado, plano, e-mail do comprador e webhooks. Ver <a href=\"payment-terms.html\">Termos de pagamento</a>."] },
      { h: "Digest por e-mail IA", p: ["Unlimited: digest diário às 22:00 hora local via Resend. Teste único para utilizadores com sessão não Unlimited.", "Link de cancelamento em cada e-mail; não cancela a assinatura Gumroad."] },
      { h: "Terceiros", p: ["Fornecedores:"], ul: ["<strong>Supabase</strong>", "<strong>DeepSeek</strong>", "<strong>Resend</strong>", "<strong>Gumroad</strong>", "<strong>Editoras RSS</strong>"] },
      { h: "Retenção", p: ["Enquanto a conta estiver ativa ou necessário para o serviço e obrigações legais.", "Análises agregadas/anónimas podem reter-se mais tempo. Direito de eliminação conforme lei aplicável."] },
      { h: "Os seus direitos", p: ["Acesso, retificação, eliminação, limitação, portabilidade ou oposição conforme jurisdição.", "<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>"] },
      { h: "Crianças", p: ["Não destinado a menores de 13 (ou 16 conforme lei local). Não recolhemos dados de crianças intencionalmente."] },
      { h: "Utilizadores internacionais", p: ["Processamento nos países dos nossos fornecedores com salvaguardas quando exigido por lei."] },
      { h: "Alterações", p: ["Atualizações com data no topo; uso continuado implica aceitação."] },
      { h: "Permissões Chrome", p: ["Solicitadas:"], ul: ["<strong>storage</strong>", "<strong>alarms</strong>", "<strong>notifications</strong>", "<strong>identity</strong>", "<strong>host permissions</strong>"] },
      { h: "Contacto", p: ["<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>", "Aivelo — <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>"] }
    ]
  },
  ru: {
    title: "Политика конфиденциальности — Industry AI News",
    updatedLabel: "Последнее обновление: 2 июня 2026 г.",
    footer: "© 2026 Aivelo. Все права защищены.",
    siblingLink: { label: "Условия оплаты", href: "payment-terms.html" },
    sections: [
      { h: "Введение", p: ["Настоящая Политика конфиденциальности описывает, как Aivelo («мы») собирает, использует и защищает информацию при использовании расширения Chrome <strong>Industry AI News</strong> и связанных сервисов на <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>. Устанавливая или используя расширение, вы соглашаетесь с описанными практиками.", "Industry AI News агрегирует отраслевые новости из разрешённых RSS-лент, создаёт AI-резюме и может синхронизировать настройки и подписки между устройствами."] },
      { h: "Собираемая информация", p: ["Мы можем собирать:"], ul: ["<strong>Учётная запись</strong> — идентификатор и email при входе через Google или OTP по email (Supabase Auth).", "<strong>Настройки</strong> — темы, напоминания, тема UI, язык в <code>chrome.storage.sync</code> и <code>local</code>; синхронизация для платных планов.", "<strong>Использование</strong> — анонимный ID, отпечаток устройства, track-prefs, действия с статьями (лайк, дизлайк, прочитано).", "<strong>Метаданные статей</strong> — URL, заголовки и даты из RSS для AI-резюме.", "<strong>Подписка</strong> — Free, Pro или Unlimited, привязка к email после покупки через Gumroad.", "<strong>Email-дайджест</strong> — email и настройки для Unlimited и eligible trial."] },
      { h: "Использование информации", p: ["Для RSS в боковой панели, AI-резюме, уведомлений, синхронизации Pro/Unlimited, подписок, email-дайджеста, улучшения сервиса и поддержки.", "Мы <strong>не продаём</strong> персональные данные и не используем их для обучения сторонних AI-моделей вне сервиса."] },
      { h: "AI-резюме", p: ["Генерируются на сервере через Supabase Edge Functions и DeepSeek. Передаются URL и заголовки (не пароли и платёжные данные). Результаты кэшируются.", "AI может ошибаться; информация справочная, не профессиональная консультация."] },
      { h: "Аутентификация", p: ["Необязательна для базового использования; нужна для sync, платных планов и trial digest. Google и OTP через Supabase Auth.", "Email входа связывает покупки Gumroad с аккаунтом расширения."] },
      { h: "Хранение и синхронизация", p: ["Локально через Chrome storage; Pro/Unlimited также в Supabase (<code>user_extension_preferences</code>), конфликты LWW.", "Удаление расширения или данных — локально; облачные данные до запроса на удаление."] },
      { h: "Уведомления", p: ["Панель закрыта: alarms и notifications Chrome. Открыта: polling.", "Заголовки и фрагменты резюме. Отключение в настройках."] },
      { h: "Подписки и оплата", p: ["Pro ($9,90/мес.) и Unlimited ($49,90/мес.) через Gumroad (Merchant of Record). Платёжные данные только у Gumroad.", "Получаем статус, план, email покупателя и webhooks. См. <a href=\"payment-terms.html\">Условия оплаты</a>."] },
      { h: "Email-дайджест AI", p: ["Unlimited: ежедневно в 22:00 по местному времени через Resend. Разовый trial для авторизованных не-Unlimited.", "Ссылка отписки в каждом письме; не отменяет подписку Gumroad."] },
      { h: "Сторонние сервисы", p: ["Поставщики:"], ul: ["<strong>Supabase</strong>", "<strong>DeepSeek</strong>", "<strong>Resend</strong>", "<strong>Gumroad</strong>", "<strong>Издатели RSS</strong>"] },
      { h: "Хранение данных", p: ["Пока аккаунт активен или необходимо для сервиса и закона.", "Агрегированные/обезличенные данные дольше. Удаление по запросу согласно закону."] },
      { h: "Ваши права", p: ["Доступ, исправление, удаление, ограничение, переносимость, возражение — по законодательству.", "<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>"] },
      { h: "Дети", p: ["Не для лиц младше 13 (или 16 по местному праву). Не собираем данные детей умышленно."] },
      { h: "Международные пользователи", p: ["Обработка в странах поставщиков с надлежащими мерами защиты."] },
      { h: "Изменения", p: ["Обновления с датой вверху; продолжение использования — согласие."] },
      { h: "Разрешения Chrome", p: ["Запрашиваются:"], ul: ["<strong>storage</strong>", "<strong>alarms</strong>", "<strong>notifications</strong>", "<strong>identity</strong>", "<strong>host permissions</strong>"] },
      { h: "Контакты", p: ["<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>", "Aivelo — <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>"] }
    ]
  },
  hi: {
    title: "गोपनीयता नीति — Industry AI News",
    updatedLabel: "अंतिम अपडेट: 2 जून 2026",
    footer: "© 2026 Aivelo. सर्वाधिकार सुरक्षित।",
    siblingLink: { label: "भुगतान की शर्तें", href: "payment-terms.html" },
    sections: [
      { h: "परिचय", p: ["यह गोपनीयता नीति बताती है कि Aivelo («हम») <strong>Industry AI News</strong> Chrome एक्सटेंशन और <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a> पर संबंधित सेवाओं के उपयोग पर जानकारी कैसे एकत्र, उपयोग और सुरक्षित करता है। एक्सटेंशन इंस्टॉल या उपयोग करने पर आप इन प्रथाओं से सहमत होते हैं।", "Industry AI News whitelisted RSS फ़ीड से उद्योग समाचार एकत्र करता है, AI सारांश बनाता है, और वैकल्पिक रूप से प्राथमिकताएँ व सब्सक्रिप्शन उपकरणों के बीच sync करता है।"] },
      { h: "एकत्र की जाने वाली जानकारी", p: ["हम निम्न श्रेणियाँ एकत्र कर सकते हैं:"], ul: ["<strong>खाता</strong> — Google या ईमेल OTP (Supabase Auth) से लॉगिन पर पहचानकर्ता और ईमेल।", "<strong>प्राथमिकताएँ</strong> — विषय, रिमाइंडर, थीम, भाषा — <code>chrome.storage.sync</code> और <code>local</code> में; paid प्लान पर सर्वर sync।", "<strong>उपयोग</strong> — अज्ञात उपयोगकर्ता ID, डिवाइस फ़िंगरप्रिंट, track-prefs, लेख क्रियाएँ (like/dislike/read)।", "<strong>समाचार मेटाडेटा</strong> — RSS से URL, शीर्षक, तिथि — AI सारांश हेतु।", "<strong>सब्सक्रिप्शन</strong> — Free, Pro या Unlimited; Gumroad खरीद के बाद ईमेल से जुड़ा।", "<strong>ईमेल डाइजेस्ट</strong> — Unlimited और eligible trial उपयोगकर्ताओं के लिए ईमेल व सेटिंग।"] },
      { h: "जानकारी का उपयोग", p: ["साइड पैनल RSS, AI सारांश, सूचनाएँ, Pro/Unlimited sync, सब्सक्रिप्शन, ईमेल डाइजेस्ट, सुधार और सहायता हेतु।", "हम व्यक्तिगत डेटा <strong>नहीं बेचते</strong> और unrelated AI प्रशिक्षण में उपयोग नहीं करते।"] },
      { h: "AI सारांश", p: ["Supabase Edge Functions और DeepSeek से सर्वर-पर। URL और शीर्षक भेजे जाते हैं (पासवर्ड/भुगतान नहीं)। कैश किया जाता है।", "AI आउटपुट अपूर्ण हो सकता है; केवल सूचनात्मक, पेशेवर सलाह नहीं।"] },
      { h: "प्रमाणीकरण", p: ["बुनियादी उपयोग के लिए वैकल्पिक; sync, paid प्लान और trial digest के लिए आवश्यक। Google और OTP — Supabase Auth।", "लॉगिन ईमेल Gumroad खरीद को खाते से जोड़ता है।"] },
      { h: "स्थानीय संग्रहण और sync", p: ["Chrome storage में स्थानीय; Pro/Unlimited Supabase (<code>user_extension_preferences</code>) में, LWW conflict।", "अनइंstall या डेटा मिटाने से स्थानीय हटता है; क्लाउड हटाने अनुरोध तक रह सकता है।"] },
      { h: "सूचनाएँ", p: ["पैनल बंद: Chrome alarms/notifications। खुला: polling।", "शीर्षक और सारांश अंश। सेटिंग में बंद कर सकते हैं।"] },
      { h: "सब्सक्रिप्शन और भुगतान", p: ["Pro ($9.90/माह) और Unlimited ($39.90/माह) Gumroad (Merchant of Record) से। भुगतान डेटा केवल Gumroad पर।", "स्थिति, प्लान, खरीदार ईमेल, webhooks प्राप्त। <a href=\"payment-terms.html\">भुगतान की शर्तें</a> देखें।"] },
      { h: "AI ईमेल डाइजेस्ट", p: ["Unlimited: स्थानीय 22:00 पर Resend से दैनिक। logged-in non-Unlimited को एक बार trial।", "प्रत्येक ईमेल में unsubscribe लिंक; Gumroad सब्सक्रिप्शन रद्द नहीं होता।"] },
      { h: "तीसरे पक्ष", p: ["प्रदाता:"], ul: ["<strong>Supabase</strong>", "<strong>DeepSeek</strong>", "<strong>Resend</strong>", "<strong>Gumroad</strong>", "<strong>RSS प्रकाशक</strong>"] },
      { h: "डेटा प्रतिधारण", p: ["खाता सक्रिय या सेवा/कानूनी आवश्यकता तक।", "एकत्रित/अनाम डेटा अधिक समय तक। लागू कानून के तहत हटाने का अनुरोध।"] },
      { h: "आपके अधिकार", p: ["पहुँच, सुधार, हटाना, प्रतिबंध, पोर्टेबिलिटी, आपत्ति — अधिकार क्षेत्र के अनुसार।", "<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>"] },
      { h: "बच्चे", p: ["13 वर्ष से कम (या स्थानीय कानून में 16) के लिए नहीं। जानबूझकर बच्चों का डेटा नहीं एकत्र करते।"] },
      { h: "अंतर्राष्ट्रीय उपयोगकर्ता", p: ["प्रदाता देशों में प्रसंस्करण, कानून के अनुसार सुरक्षा उपायों के साथ।"] },
      { h: "परिवर्तन", p: ["ऊपर की तिथि नवीनतम संस्करण; निरंतर उपयोग स्वीकृति है।"] },
      { h: "Chrome अनुमतियाँ", p: ["अनुरोधित:"], ul: ["<strong>storage</strong>", "<strong>alarms</strong>", "<strong>notifications</strong>", "<strong>identity</strong>", "<strong>host permissions</strong>"] },
      { h: "संपर्क", p: ["<a href=\"mailto:goaivelo@gmail.com\">goaivelo@gmail.com</a>", "Aivelo — <a href=\"https://aivelo.net\" target=\"_blank\" rel=\"noopener\">aivelo.net</a>"] }
    ]
  }
};
