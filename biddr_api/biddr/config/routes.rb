Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, default: { format: :json } do
    namespace :v1 do
      resources :auctions
      resources :sessions, only: [:create]
      delete('/sign_out', to: 'sessions#destroy')
      resources :users, only: [:create]
      # /api/v1/current_user
      get('/current_user', to: 'sessions#get_current_user')
    end
  end
end
