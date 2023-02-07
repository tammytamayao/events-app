Rails.application.routes.draw do
  get 'home/index'
  namespace :api do
    namespace :v1 do
      get 'events/index'
      post 'events/create'
      get '/show/:id', to: 'events#show'
      put '/update/:id', to: 'events#update'
      delete '/destroy/:id', to: 'events#destroy'
    end
  end
  root 'events#index'
  get '/*path' => 'events#index'
end
