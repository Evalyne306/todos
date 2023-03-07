# require_relative "./config/environment"
# use Rack::Cors do
#     allow do
#       origins 'http://localhost:3000' # Update this with the URL of your React app
#       resource '*', headers: :any, methods: [:get, :post, :put, :delete, :options]
#     end
#   end

# run MovieController
require_relative "./config/environment"
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: :any
  end
end

run MovieController

