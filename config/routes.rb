Rails.application.routes.draw do
  resources :posts
  resources :users
  root 'pages#index'
  get 'basic_datatable', to: "pages#basic_datatable"
  get 'ajax_datatable', to: "pages#ajax_datatable"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
