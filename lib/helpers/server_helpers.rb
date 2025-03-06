module ServerHelpers
  def sorted_servers
    @items.select { |i| i.identifier.to_s.start_with?('/servers/') && !i.identifier.to_s.end_with?('/index.html') }
          .sort_by { |i| i[:created_at] || Date.today }
          .reverse
  end

  def featured_servers
    sorted_servers.select { |s| s[:featured] }.first(3)
  end

  def recent_servers
    sorted_servers.reject { |s| s.identifier.to_s.end_with?('/categories.md') }.first(6)
  end

  def server_path(server)
    # Return path without trailing slash for the new URL structure
    path = server.identifier.to_s.gsub('/servers/', '').gsub('.md', '')
    path.end_with?('.html') ? path : "#{path}.html"
  end
end
