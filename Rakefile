require 'uglifier'
require 'compass'

task :compile_js do
  source = File.read(File.expand_path('js/jquery.box-lid.js', __dir__))
  uglified, source_map = Uglifier.compile_with_map(source)
  { js: uglified, map: source_map }.each do |k, v|
    File.write(File.expand_path("js/jquery.box-lid.min.#{k}", __dir__), v)
  end
  puts 'done with javascripts'
end

task :compile_css do
  system 'compass compile', '--output-style=compressed', '.'
  puts 'done with stylesheets'
end

task :compile => %i[compile_css compile_js]
