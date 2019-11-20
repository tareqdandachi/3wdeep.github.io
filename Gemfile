source "https://rubygems.org"

# Including GitHub Pages gem
gem "github-pages", group: :jekyll_plugins

# gem "jekyll", "~> 4.0.0"

# Plugins used by the site
group :jekyll_plugins do
  gem 'jekyll-remote-theme'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
