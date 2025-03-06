# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

# First, require all necessary files
require_relative 'helpers/server_helpers'

# Include standard Nanoc helpers
include Nanoc::Helpers::Rendering
include Nanoc::Helpers::Blogging
include Nanoc::Helpers::XMLSitemap

use_helper Nanoc::Helpers::Blogging
use_helper Nanoc::Helpers::Rendering
use_helper Nanoc::Helpers::XMLSitemap

# Include custom helpers
include ServerHelpers
