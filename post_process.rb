# frozen_string_literal: true

# Remove the .html extension from sitemap and feed URLs
# Filter out specific pages from the sitemap

require 'nokogiri'

begin
  sitemap_xml = File.read('output/sitemap.xml')
  sitemap_doc = Nokogiri::XML(sitemap_xml)

  # Find all URL nodes
  urls = sitemap_doc.xpath('/ns:urlset/ns:url', 'ns' => 'http://www.sitemaps.org/schemas/sitemap/0.9')

  # Filter out unwanted pages
  urls.each do |url|
    loc = url.at_xpath('ns:loc', 'ns' => 'http://www.sitemaps.org/schemas/sitemap/0.9')
    if loc && (loc.content.include?('/success.html') || loc.content.include?('/servers/categories.html'))
      url.remove
    elsif loc
      # Remove .html extension for remaining URLs
      loc.content = loc.content.gsub(/.html/, '')
    end
  end

  File.write('output/sitemap.xml', sitemap_doc.to_xml)
rescue SystemCallError => e
  puts e.message
end
