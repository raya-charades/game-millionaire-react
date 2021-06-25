# rewrite settings

## レンタルサーバー等の場合

---

### 「.htaccess」ファイルを作成し、以下を記入。

```
RewriteEngine on
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## firebase hosting の場合

---

### 「.firebase.json」ファイルを作成し、以下を記入。

```
{
  "database": {
    "rules": "database.rules.json"
  },
  "hosting": {
    "public": "public",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## netlify の場合

---

### 「public/\_redirects」を作成し、以下を記入。

```
/* /index.html 200
```

参考：「 [【 Qiita 】 react-router を使って静的コンテンツを配信する際の rewrite 設定覚書](https://qiita.com/Jey/items/fe98cb6773c057b1a4c8) 」
