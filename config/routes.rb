Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: { fromat: :json } do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :listings, only: [:create, :update, :index, :show]
  end
end
