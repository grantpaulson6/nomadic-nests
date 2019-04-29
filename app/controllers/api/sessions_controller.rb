class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Invalid login credentials"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            logout
            #reset @user here too, so the show will come up empty, like render {}
            render "api/users/show"
        else
            render json: ["Not currently logged in"], status: 404
        end
    end
end
