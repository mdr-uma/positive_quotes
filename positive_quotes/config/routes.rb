Rails.application.routes.draw do
  resources :categories, only: [:index, :show]
  resources :quotes, except: [:destroy]
end
