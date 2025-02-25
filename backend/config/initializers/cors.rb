
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "localhost:8000", "https://verification-spotify-playsong.vercel.app"

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end
