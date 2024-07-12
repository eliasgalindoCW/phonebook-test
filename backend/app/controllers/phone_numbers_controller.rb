class PhoneNumbersController < ApplicationController
    before_action :set_phone_number, only: [:show, :update, :destroy]
  
    def index
      @phone_numbers = PhoneNumber.all
      render json: @phone_numbers
    end
  
    def create
      @phone_number = PhoneNumber.new(phone_number_params)
  
      if @phone_number.save
        render json: @phone_number, status: :created
      else
        render json: @phone_number.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @phone_number.update(phone_number_params)
        render json: @phone_number
      else
        render json: @phone_number.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @phone_number.destroy
    end
  
    private
  
    def set_phone_number
      @phone_number = PhoneNumber.find(params[:id])
    end
  
    def phone_number_params
      params.require(:phone_number).permit(:name, :phone_number, :notes)
    end
  end
  