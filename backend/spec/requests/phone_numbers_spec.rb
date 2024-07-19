require 'rails_helper'

RSpec.describe "PhoneNumbers", type: :request do
  let!(:phone_number) { create(:phone_number, name: "Elias Galindo", phone_number: "1234567890", notes: "Test note") }

  describe "GET /phone_numbers" do
    it "returns a list of phone numbers" do
      get phone_numbers_path
      expect(response).to have_http_status(200)
      expect(response.body).to include("Elias Galindo")
    end
  end

  describe "POST /phone_numbers" do
    it "creates a new phone number" do
      expect {
        post phone_numbers_path, params: { phone_number: { name: "Galindo Elias", phone_number: "0987654321", notes: "Another test note" } }
      }.to change(PhoneNumber, :count).by(1)
      expect(response).to have_http_status(201)
      expect(response.body).to include("Galindo Elias")
    end
  end

  describe "PUT /phone_numbers/:id" do
    it "updates an existing phone number" do
      put phone_number_path(phone_number), params: { phone_number: { name: "Elias Updated", phone_number: "1234567890", notes: "Updated note" } }
      expect(response).to have_http_status(200)
      phone_number.reload
      expect(phone_number.name).to eq("Elias Updated")
      expect(phone_number.notes).to eq("Updated note")
    end
  end

  describe "DELETE /phone_numbers/:id" do
    it "deletes an existing phone number" do
      expect {
        delete phone_number_path(phone_number)
      }.to change(PhoneNumber, :count).by(-1)
      expect(response).to have_http_status(200)
    end
  end
end
