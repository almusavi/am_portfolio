# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( component.css )
Rails.application.config.assets.precompile += %w( demo.css )
Rails.application.config.assets.precompile += %w( normalize.css )
Rails.application.config.assets.precompile += %w( cable.js )
Rails.application.config.assets.precompile += %w( demo-2.js )
Rails.application.config.assets.precompile += %w( EasePack.min.js )
Rails.application.config.assets.precompile += %w( rAF.js )
Rails.application.config.assets.precompile += %w( TweenLite.min.js )
Rails.application.config.assets.precompile += %w( stylish_portfolio/manifest.css stylish_portfolio/manifest.js )
Rails.application.config.assets.precompile += %w( creative/manifest.js creative/manifest.css )
Rails.application.config.assets.precompile += %w( freelancer/manifest.js freelancer/manifest.css )




# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
