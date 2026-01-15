# Blog Post Builder - Setup Instructions

## 🔐 Access URL

The blog post builder is accessible via a hidden URL:

```
https://your-site.com#/blog-admin-secret
```

Simply add `#/blog-admin-secret` to the end of your site URL in the browser address bar.

## 🎯 Features

### 1. Blog Post Manager
- View all blog posts (published & drafts)
- Search and filter posts
- Quick edit, view, and delete actions
- Visual status indicators

### 2. Blog Post Builder
- Rich text editor for content
- Title, excerpt, and category selection
- Featured image upload (URL or file)
- Read time estimation
- Draft/Publish workflow
- Live preview mode

### 3. Profile Settings
- Author name
- Bio
- Avatar URL
- Email

## 📝 Workflow

1. **First Time Setup**
   - Navigate to `#/blog-admin-secret`
   - Click "Settings" button
   - Fill in your profile information
   - Save profile

2. **Creating a Blog Post**
   - Click "New Post"
   - Enter title and content
   - Add featured image (URL or upload)
   - Set category and read time
   - Save as draft or publish immediately

3. **Editing Posts**
   - Find post in manager
   - Click edit button
   - Make changes
   - Save or publish

4. **Managing Posts**
   - Filter by status (all/published/drafts)
   - Search by title or excerpt
   - Delete unwanted posts

## ⚠️ Current Limitations (localStorage Demo)

This is a **temporary localStorage implementation** with these limitations:

- ❌ Data stored only in browser (one device)
- ❌ Data lost if browser cache cleared
- ❌ No real image hosting (base64 encoded)
- ❌ No collaboration features
- ❌ No backup/export functionality

## 🚀 Next Step: Migrate to Supabase

For production use, you **must migrate to Supabase** which provides:

- ✅ Real database storage
- ✅ Image hosting and CDN
- ✅ Cross-device access
- ✅ Team collaboration
- ✅ Automatic backups
- ✅ API for custom integrations

**See Guidelines.md for the migration reminder!**

## 💡 Tips

1. **Save Often**: While editing, save drafts frequently
2. **Preview Before Publishing**: Always preview your post before publishing
3. **Use Meaningful Titles**: Good for SEO and user experience
4. **Add Excerpts**: Summarize your post for listing pages
5. **Choose Categories**: Helps organize content
6. **Optimize Images**: Use compressed images for better performance

## 📚 Categories Available

- Market Updates
- First-Time Buyers
- Refinancing
- Investment
- Tips & Advice

## 🔧 Technical Details

**Storage Key**: `mortgage_blog_posts` (localStorage)
**Profile Key**: `mortgage_user_profile` (localStorage)

**File Structure**:
```
/utils/localStorage.ts - Storage utilities
/components/BlogPostManager.tsx - Main manager view
/components/BlogPostBuilder.tsx - Editor interface
/components/ProfileSettings.tsx - Profile management
```

## 🆘 Troubleshooting

**Posts disappeared?**
- Check if browser cache was cleared
- Verify you're on the same browser/device
- This is why we need Supabase migration!

**Image won't load?**
- Try using a direct image URL instead
- Ensure URL is publicly accessible
- Consider image size (too large may slow down)

**Can't access builder?**
- Ensure you're using exact URL: `#/blog-admin-secret`
- Check browser console for errors
- Try hard refresh (Ctrl/Cmd + Shift + R)
