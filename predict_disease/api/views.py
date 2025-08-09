from rest_framework import viewsets

from pneumonia.models import PneumoniaScan
from pneumonia.serializers import PneumoniaScanSerializers, PneumoniaScanPostSerializers
from pneumonia.predict import predict_image  

class PneumoniaScanViewSet(viewsets.ModelViewSet):
    queryset = PneumoniaScan.objects.all()

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return PneumoniaScanPostSerializers
        return PneumoniaScanSerializers

    def perform_create(self, serializer):
        instance = serializer.save()
        data = predict_image(instance.Xray.path)
        instance.result = data["result"]
        instance.confidance = data["confidence"]
        instance.save()
