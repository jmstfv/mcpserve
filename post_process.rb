# frozen_string_literal: true

# Remove the .html extension from sitemap and feed URLs

require 'nokogiri'

begin
  sitemap_xml = File.read('output/sitemap.xml')
  sitemap_doc = Nokogiri::XML(sitemap_xml)

  locs = sitemap_doc.xpath('/ns:urlset/ns:url/ns:loc', 'ns' => 'http://www.sitemaps.org/schemas/sitemap/0.9')
  locs.each { |loc| loc.content = loc.content.gsub(/.html/, '') }

  File.write('output/sitemap.xml', sitemap_doc.to_xml)
rescue SystemCallError => e
  puts e.message
end
